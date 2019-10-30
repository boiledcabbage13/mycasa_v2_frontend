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
							<v-snackbar
								v-model="snackbar.show"
								:timeout="snackbar.timeout"
								:color="snackbar.color"
							>
								{{ snackbar.text }}
								<v-btn
									:color="snackbar.button.color"
									text
									@click="snackbar.show = false"
								>
									Close
								</v-btn>
							</v-snackbar>
						</v-card-actions>
					</v-card>
				</v-col>
			</v-row>
    	</v-container>
	</v-content>
</template>

<script>
import { RepositoryFactory } from "@/repositories/repositoryFactory";
import Storage from '@/storage.js'

const userRepository = RepositoryFactory.get("user");
const storage = new Storage();

export default {
	data: () => ({
		quote: "IT'S ABOUT TIME CAR MAINTENANCE BECAME CONVENIENT",
		form: {
			username: 'test@test.com',
			password: 'pass123$'
		},
		snackbar: {
			show: false,
			timeout: 2000,
			text: '',
			color: 'success',
			button: {
				color: 'black'
			}
		}
	}),
	methods:{
		async login(){
			await userRepository.login(this.form)
			.then(async response => {
				let { data : user } = await response;

				if(user.token.accessToken) {
					await storage.set('user', user, true);
					await storage.set('authenticated', true);

					this.snackbar = {
						show: true,
						timeout: 2000,
						text: 'Successfully Log In.',
						color: 'success',
						button: {
							color: 'black'
						}
					}
					await this.mixins_goToPage('/dashboard');
				} else {
					alert('wrong')
				}
			})
			.catch(error => {
				console.log({error})
				this.snackbar = {
					show: true,
					timeout: 2000,
					text: 'Invalid Username or Password.',
					color: 'error',
					button: {
						color: 'black'
					}
				}
			})
			// 
		},
		async checkIfLoggedIn(){
			let authenticated = await storage.get('authenticated');

			if(authenticated) {
				await this.mixins_goToPage('/dashboard');
			} else {
				await this.mixins_goToPage('/');
			}
		}
	},
	mounted(){
		this.checkIfLoggedIn();
	}
}
</script>