<template>
	<v-content>
		<v-container
			class="fill-height app-theme--darker"
			fluid
		>
			<v-row
				align="center"
				justify="center"
			>
				<v-col
					cols="12"
					sm="8"
					md="4"
				>
					<v-img 
						:src="require('../../assets/logo/mycasalogo.png')" 
						contain 
						height="100" 
						position="center" 
						class="ma-4"
					/>
					<v-card class="elevation-12">
						<v-toolbar
							dark
							flat
							class="app-theme"
						>
							<v-toolbar-title>Login:</v-toolbar-title>
						</v-toolbar>
						<v-card-text>
							<v-form>
								<v-text-field
									label="Login"
									name="login"
									prepend-icon="mdi-account"
									type="text"
								></v-text-field>

								<v-text-field
									id="password"
									label="Password"
									name="password"
									prepend-icon="mdi-lock"
									type="password"
								></v-text-field>
							</v-form>
						</v-card-text>
						<v-card-actions>
							<v-spacer></v-spacer>
							<v-btn class="app-button--primary" @click="toDashboard()">Login</v-btn>
						</v-card-actions>
					</v-card>
				</v-col>
			</v-row>
    	</v-container>
	</v-content>
</template>

<script>
  export default {
	  methods:{
		  toDashboard(){
			this.$router.push('/dashboard');
		  }
	  }
  }
</script>