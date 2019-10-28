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
					<p class="text__quote">{{ quote }}</p>
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
									v-model="form.username"
									label="Login"
									name="login"
									prepend-icon="mdi-account"
									type="text"
								></v-text-field>

								<v-text-field
									v-model="form.password"
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
							<v-btn class="app-button--primary" @click="login()">Login</v-btn>
						</v-card-actions>
					</v-card>
				</v-col>
			</v-row>
    	</v-container>
	</v-content>
</template>

<script>
import { RepositoryFactory } from "@/repositories/repositoryFactory";

const userRepository = RepositoryFactory.get("user");

export default {
	data: () => ({
		quote: "IT'S ABOUT TIME CAR MAINTENANCE BECAME CONVENIENT",
		form: {}
	}),
	methods:{
		login(){
			userRepository.login(this.form)
			this.$router.push('/dashboard');
		}
	}
}
</script>