
<template>
  <v-app>
    <v-container class="fill-height">
      <v-row align="center" justify="center">
        <v-col colss="12" md="8" sm="8">
          <v-card>
           <v-window>
             <v-window-item>
               <v-row>
                 <v-col cols="12" md="8">
                   <v-card-text class="mt-12">
                    <h4 class="text-center">welcome to my site</h4>
                    <div class="text-center mt-4">
                      <v-btn class="mx-2" fab color="black" outlined>
                      <v-icon>fab fa-facebook-f</v-icon>
                      </v-btn>
                      <v-btn class="mx-2" fab color="black" outlined>
                      <v-icon>fab fa-facebook-f</v-icon>
                      </v-btn>
                    </div>
                    <h3 class="text-center">i am going to make it dosent matter what it cost</h3>
                    <v-from>
                      <v-text-field
                      label="Email"
                      v-model="email"
                      prepend-icon=email
                      >
                      </v-text-field>
                      <v-text-field
                      label="Password"
                      name="password"
                      prepend-icon="lock"
                      >
                      </v-text-field>
                    </v-from>
                    <h3 class="text-center">Forget ur password?</h3>
                   </v-card-text>
                 </v-col>
                 <v-col cols="12" md="4" class="teal accent-3">
                   <v-card-text>
                  <h3 class="text-center">we are always and will be the best in the world</h3>
                   </v-card-text>
                   <div class="text-center">
                      <v-btn> SIGNUP</v-btn>
                   </div>
                 </v-col>
               </v-row>
             </v-window-item>
           </v-window>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
