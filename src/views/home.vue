<template>
<div>
    <v-img lazy-src="../assets/logo.svg" src="../assets/team.jpg" aspect-ratio="2.75">
        <v-row align="center" justify="center" style="height: 80%;">
            <vue-typer class="align-center" :text='text'></vue-typer>
        </v-row>
    </v-img>
    <v-col cols="12">
        <v-row justify="space-around">
            <v-col class="col-md-6 col-sm-12">
                <v-img rounded height="250px" src="../assets/teamDesign.jpg">
                </v-img>
            </v-col>
            <v-col class="col-md-6 col-sm-12">
              <h3>We aim to</h3>
                <ul>
                    <li> Make Nile University's students capable of competing in the international market.
                    </li>
                    <li> Create leaders able to innovate and implement their ideas.
                    </li>
                    <li> Work on various project and emerging research topics to keep up with the industrial development.
                    </li>
                </ul>
            </v-col>
        </v-row>
        <v-row justify="space-around">
            <v-col class="col-md-6 col-sm-12">
                <v-img rounded height="250px" src="../assets/car.jpg">
                </v-img>
            </v-col>
            <v-col class="col-md-6 col-sm-12">
              <h3>Our Mission</h3>
                <ul>
                    <li> Encouraging students at Nile University to work on projects and competitions and help them while doing so be monitoring and follow up systems.
                    </li>
                    <li> Developing individuals through periodic sessions and training in order to spread knowledge and awareness in an easy, fun and creative way.
                    </li>
                    <li> Applying the PBL “project-based learning” strategy in which student insure to learn through the project not learning to make a project
                    </li>
                </ul>
            </v-col>
        </v-row>
    </v-col>
</div>
</template>

<script>
import {
    VueTyper
} from 'vue-typer'
export default {
    components: {
        'vue-typer': VueTyper
    },
    data() {
        return {
            text: ["RESEARCH", "PROJECT", "MONITORING", "UPLIFTING", "STARTUPS"]
        }
    },
}
</script>

<style lang="scss">

.vue-typer {
    /* Styles for the vue-typer container
     e.g. font-family, font-size  */
    font-family: 'Raleway', sans-serif;

    .custom.char {
        /* Styles for each character
       e.g. color, background-color */
        color: #ffffff;
        font-size: 40px;

        &.typed {
            color: #ffffff;
            font-size: 40px;
            /* Styles specific to typed characters
         i.e. characters to the left of the caret */
        }

        &.selected {
            /* Styles specific to selected characters
         i.e. characters to the right of the caret while VueTyper's
              'eraseStyle' is set to a selection-based style */
        }

        &.erased {
            /* Styles specific to erased characters
         i.e. characters to the right of the caret while VueTyper's
              'eraseStyle' is set to a non-selection-based style */
        }
    }

    .custom.caret {
        /* Styles for the caret
       e.g. background-color, animation, display */

        &.pre-type {
            /* Styles for the caret when it is idle before typing
         i.e. before a string starts being typed, during 'preTypeDelay' */
        }

        &.pre-erase {
            /* Styles for the caret when it is idle before erasing
         i.e. before a string starts being erased, during 'preEraseDelay' */
        }

        &.idle {
            /* Styles for the caret when it is idle, but VueTyper has not yet completed typing
         i.e. when 'pre-type' or 'pre-erase' is set, but not 'complete' */
        }

        &.typing {
            /* Styles for the caret while VueTyper is typing
         i.e. when the caret is moving forwards */
        }

        &.selecting {
            /* Styles for the caret while VueTyper is selecting
         i.e. when the caret is moving backwards and 'eraseStyle' is
         set to a selection-based style */
        }

        &.erasing {
            /* Styles for the caret while VueTyper is erasing
         i.e. when the caret is moving backwards and 'eraseStyle' is
         set to a non-selection-based style */
        }

        &.complete {
            /* Styles for the idle caret when VueTyper has finished all typing/erasing */
        }
    }
}
</style>
