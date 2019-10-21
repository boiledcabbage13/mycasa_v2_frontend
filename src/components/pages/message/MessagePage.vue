<template>
    <v-container fluid>
        <v-row>
            <v-col>
                <v-tabs
                    v-model="tab"
                    grow
                    show-arrows
                    class="pa-1"
                >
                    <v-tab
                        v-for="(item, key) in tabItems"
                        :key="key"
                    >
                        {{ item.name }}
                    </v-tab>
                </v-tabs>

                <v-tabs-items v-model="tab">
                    <v-tab-item
                        v-for="(item, key) in tabItems"
                        :key="key"
                    >
                        <v-card max-height="auto" class="pa-1">
                            <v-card-text>
                                <v-row no-gutters>
                                    <v-col cols="3">
                                        <v-list 
                                            two-line 
                                            max-height="100vh" class="overflow-y-auto"
                                        >
                                            <v-list-item-group color="primary">
                                                <v-list-item v-for="(message, index) in messages" :key="index">
                                                    <v-list-item-content  @click="showThread(message.id)">
                                                        <v-list-item-title>{{message.name}}</v-list-item-title>
                                                        <v-list-item-subtitle>{{message.lastChat}}</v-list-item-subtitle>
                                                    </v-list-item-content>
                                                </v-list-item>
                                            </v-list-item-group>    
                                        </v-list>
                                    </v-col>
                                    <v-col cols="9">
                                        <v-list max-height="100vh" class="overflow-y-auto pa-2">
                                            <v-list-item-content v-for="(chat, index) in chats" :key="index">
                                                <v-row>
                                                    <v-col cols="12" v-if="chat.admin" class="text-right chat-balloon">
                                                        <div class="-blue">
                                                            {{chat.text}}
                                                        </div>
                                                    </v-col>
                                                    <v-col cols="12" v-else class="text-left chat-balloon">
                                                        <div class="-gray">
                                                            {{chat.text}}
                                                        </div>
                                                    </v-col>
                                                </v-row>
                                            </v-list-item-content>
                                        </v-list>
                                    </v-col>
                                </v-row>
                                <v-row v-show="showChat" no-gutters>
                                    <v-col cols="3">
                                    </v-col>
                                    <v-col cols="9">
                                        <v-text-field
                                            v-model="text"
                                            height="2em"
                                            outlined
                                            rounded
                                            color="primary"
                                            label="Type a message..."
                                            append-outer-icon="mdi-message-processing-outline"
                                            @click:append-outer="sendChat()"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-card>
                    </v-tab-item>
                </v-tabs-items>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        tab: null,
        tabItems: [
          {name: 'Inbox', value:'inbox'},
          {name: 'New Inquiries', value:'newInquiries'},
          {name: 'Pending Estimates', value:'pendingEstimates'},
          {name: 'Open Job Orders', value:'openJobOrders'},   
          {name: 'Closed Job Orders', value:'closedJobOrders'},
        ],
        text: '',     
        showChat: false,   
        messages: [
            {
                id: 1,
                name: 'Fourello Expee',
                lastChat: 'Test Chat'
            },
            {
                id: 2,
                name: 'Expee Fourello',
                lastChat: 'Chat Test'
            },
            {
                id: 1,
                name: 'Fourello Expee',
                lastChat: 'Test Chat'
            },
            {
                id: 2,
                name: 'Expee Fourello',
                lastChat: 'Chat Test'
            },
            {
                id: 1,
                name: 'Fourello Expee',
                lastChat: 'Test Chat'
            },
            {
                id: 2,
                name: 'Expee Fourello',
                lastChat: 'Chat Test'
            },
            {
                id: 1,
                name: 'Fourello Expee',
                lastChat: 'Test Chat'
            },
            {
                id: 2,
                name: 'Expee Fourello',
                lastChat: 'Chat Test'
            },
            {
                id: 1,
                name: 'Fourello Expee',
                lastChat: 'Test Chat'
            },
            {
                id: 2,
                name: 'Expee Fourello',
                lastChat: 'Chat Test'
            },
            {
                id: 1,
                name: 'Fourello Expee',
                lastChat: 'Test Chat'
            },
            {
                id: 2,
                name: 'Expee Fourello',
                lastChat: 'Chat Test'
            },
            {
                id: 1,
                name: 'Fourello Expee',
                lastChat: 'Test Chat'
            },
            {
                id: 2,
                name: 'Expee Fourello',
                lastChat: 'Chat Test'
            },
            
        ],

        chats: []
        
    }),
    methods: {
        showThread(id) {
            this.showChat = true;
            let chats = [
                {text: 'Hi!', admin: true},
                {text: 'Hello!', admin: false},
                {text: 'Test!', admin: true},
                {text: 'Testing!', admin: true},
                {text: 'Testing Done!', admin: false},
            ];

            this.chats = chats
        },
        sendChat(){
            if(this.text) {
                this.chats.push({
                    text: this.text,
                    admin: true
                });
            }

            this.text = '';
        }
    }
}
</script>