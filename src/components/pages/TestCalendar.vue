<template>
    <div>
        <table>
            <thead>
                <tr>
                    <td></td>
                    <td v-for="(name, key) in weekNames" :key="key">
                        {{name}}
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td v-for="(day, key) in selectedWeek" :key="key">
                        {{day.day}}
                    </td>
                </tr>   
            </thead>
            <tbody>
                <tr v-for="(time, key) in timeSpan"  :key="key">
                    <td>{{time}}</td>
                    <td>col 1</td>
                    <td>col 2</td>
                    <td>col 3</td>
                    <td>col 4</td>
                    <td>col 5</td>
                    <td>col 6</td>
                    <td>col 7</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data: () => ({
        dates: [],
        week: [],
        weekNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        timeSpan: []
    }),
    computed: {
        selectedMonth: function() {
            return this.dates;
        },
        selectedWeek: function() {
            console.log(this.week)
            return this.week;
        }
    },
    methods: {
        getDaysMonth(year, month) {
            let index = new Date(year, month , 1).getDay();
            let lastDate = new Date(year, month + 1, 0).getDate();

            let dates = []
            
            for (let startDay = 1; startDay <= lastDate; startDay++) {
                dates.push({
                    day: startDay,
                    weekIndex: index,
                    weekName: this.getWeek(index)
                });

                index++

                if(index >= 7) {
                    index = 0
                }
            }

            this.dates = dates;
        },
        async getDaysWeek(day){
            let date = this.dates.find(item => item.day == day);
            let index = this.dates.findIndex(item => item.day == day);

            let next = await this.getNextDays(date.weekIndex, index);
            let prev = await this.getPrevDays(date.weekIndex, index);

            let spanWeek = await next.concat(prev);

            let week = await [...new Set(spanWeek)];

            await week.sort((a,b) => (a.day > b.day) ? 1 : ((b.day > a.day) ? -1 : 0));

            this.week = week;
        },
        getNextDays(weekIndex, index){
            let next = [];

            for (let start = weekIndex; start <= 6; start++) {
                next.push(this.dates[index])
                
                index++
            }

            return next;
        },
        getPrevDays(weekIndex, index){
            let prev = [];

            for (let start = weekIndex; start >= 0; start--) {
                prev.push(this.dates[index])
                
                index--
            }

            return prev;
        },
        getWeek(index){
            const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

            return week[index];
        },
        getTime(){
            let time = [];

            for (let index = 12; index >= 1; index--) {
                time.push(`${index}:00`);
                time.push(`${index}:30`);  
            }

            let timeAM = time.map(item => `${item} AM`);
            let timePM = time.map(item => `${item} PM`);

            let timeSpan = timeAM.concat(timePM);

            this.timeSpan = timeSpan;
        }
    },
    mounted() {
        this.getDaysMonth(2019,9)
        this.getDaysWeek(9);
        this.getTime();
    }
}
</script>