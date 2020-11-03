<template>
<v-container>
   <v-row class="ml-3">
       <v-col
       cols="12"
       md="8"
       >
        <v-card class="ml-3">
            <div
             class="card-action"
            >
             <v-card-action
            >
                <v-icon
                class="ml-3 "
                >
                fab fa-google-plus-g
                </v-icon>
                <v-span
                 class="ml-3 mt-6">UP NEXT</v-span>
            </v-card-action>
            <v-span
            class="float-right mr-3"
            >Show less</v-span>
            </div>
            <v-card-text>
                <p
                class="text-center">No Upcoming Events, Reminders, or Alarms</p>
            </v-card-text>
            <v-spacer></v-spacer>

        </v-card>
        <v-card
        class="mt-3 ml-3"
        >
        <div
        class="card-action"
        >
        <v-card-action>
                <v-icon
                class="ml-3 "
                >
                fab fa-google-plus-g
                </v-icon>
                <v-span
                 class="ml-3 mt-6">SIRI APP SUGGESTIONS</v-span>
        </v-card-action>
        <v-span
        class="float-right mr-3"
        >Show Less</v-span>
        </div>
        <v-card-text>
            <v-row
            class="mx-3 text-center"
            >
                <v-col
                cols="12"
                md="3"
                sm="3"
                >
                <v-icon
                >
                fab fa-google-plus-g
                </v-icon>
                <p>Snapchat</p>
                </v-col>
                <v-col
                cols="12"
                md="3"
                sm="3"
                >
                <v-icon
                >
                fab fa-google-plus-g
                </v-icon>
                <p>Instagram</p>
                </v-col>
                <v-col
                cols="12"
                md="3"
                sm="3"
                >
                <v-icon
                >
                     fab fa-google-plus-g
                </v-icon>
                <p>Photo</p>
                </v-col>
                <v-col
                cols="12"
                md="3"
                 sm="3"
                >
                <v-icon
                >
                     fab fa-google-plus-g
                </v-icon>
                <p>Viber</p>
                </v-col>
            </v-row>
            <v-row
            class="mx-3 text-center"
            >
                <v-col
                cols="12"
                md="3"
                 sm="3"
                >
                <v-icon
                >
                     fab fa-google-plus-g
                </v-icon>
                <p>Messenger</p>
                </v-col>
                <v-col
                cols="12"
                md="3"
                 sm="3"
                >
                <v-icon
                >
                     fab fa-google-plus-g
                </v-icon>
                <p>Facebook</p>
                </v-col>
                <v-col
                cols="12"
                md="3"
                 sm="3"
                >
                <v-icon
                >
                     fab fa-google-plus-g
                </v-icon>
                <p>mail</p>
                </v-col>
                <v-col
                cols="12"
                md="3"
                 sm="3"
                >
                <v-icon
                >
                     fab fa-google-plus-g
                </v-icon>
                <p>Youtube</p>
                </v-col>
            </v-row>
        </v-card-text>
        </v-card>
        <v-card class="mt-3">
            <div
            class="card-action">
                <v-card-action>
                    <v-icon class="ml-3">
                         fab fa-google-plus-g
                    </v-icon>
                    <v-sapn>WEATHER</v-sapn>
                </v-card-action>
                <span class="float-right mr-3">Show More</span>
            </div>
            <div>
                <v-card-text>
                    <v-row>
                        <v-col
                        cols="12"
                        md="4"
                        >
                        <v-icon></v-icon>
                        </v-col>
                        <v-col
                        cols="12"
                        md="4"
                        >
                        <v-card-title>kathmandu District</v-card-title>
                        <v-card-text>
                            <p>Partialy Cloud</p>
                            <p>Chances of Rain: 10%</p>
                        </v-card-text>
                        </v-col>
                        <v-col
                        cols="12"
                        md="4"
                        >
                       <v-card-title>
                           21
                       </v-card-title>
                        </v-col>
                    </v-row>
                </v-card-text>
            </div>
        </v-card>
       </v-col>
   </v-row>
</v-container>
</template>

<style scoped>
.card-action{
    background-color: grey;
}
</style>
