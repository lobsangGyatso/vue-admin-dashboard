<template>
    <v-container
    >
    <v-row align="center" justify="center">
        <v-col
        cols="12"
        md=12
        >
        <v-card class="mt-10">
            <v-card-title>
                <p>User Profile</p>
            </v-card-title>
            <v-row class="mx-3">
                <v-col cols="12" md="4">
                    <v-text-field
                    label="username"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                    <v-text-field
                    label="first name"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                    <v-text-field
                    label="last name"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row class="mx-3">
                <v-col cols="12" md="12">
                    <v-text-field
                    label="country"
                    ></v-text-field>
                </v-col>
            </v-row>
             <v-row class="mx-3">
                <v-col cols="12" md="4">
                    <v-text-field
                    label="city"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                    <v-text-field
                    label="post address "
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                    <v-text-field
                    label="country"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-card-action>
                <v-btn class="mx-3">
                    submit
                </v-btn>
            </v-card-action>
        </v-card>
        </v-col>
    </v-row>
    </v-container>
</template>
