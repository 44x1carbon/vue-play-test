import TestButton from './TestButton.vue'
import { play } from 'vue-play'
import readme from './TestButton.md'

play(TestButton)       
    .add('with text', '<test-button>test</test-button>')
    .add('with template', {      
        data() {
            return {
                text: 'props text'
            }
        },
        template: '<test-button :text="text">template</test-button>',
        readme,
        example: '<test-button :text="text">template</test-button>'
    })
    .add('with render', h => h(TestButton, ['render']))