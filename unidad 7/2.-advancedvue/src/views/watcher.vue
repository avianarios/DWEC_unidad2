<script setup>
    ////Watchers////

    import { ref,watch } from 'vue'

    const question = ref('')
    const answer = ref('Questions usually contain a question mark. ;-)')
    const loading = ref(false)

    // watch works directly on a ref
    watch(question, async (newQuestion, oldQuestion) => {
        const res = await fetch('https://yesno.wtf/api')

        if (newQuestion.includes('?')) {
            loading.value = true
            answer.value = 'Thinking...'
            try {
                const res = await fetch('https://yesno.wtf/api')
                answer.value = (await res.json()).answer
            } catch (error) {
                answer.value = 'Error! Could not reach the API. ' + error
            } finally {
                loading.value = false
            }
        }
    });
    /*Watch admits some options (after the last bracket):
        }, {inmediate:true});

        -inmediate-> watch is lazy, it calls the callback when the source changes. Inmediate allows to call inmediately. Thus, an initial load of data can be done
        -once
    */
</script>
<template>

    <article class="borde">
        <h3>Watchers</h3>
        <p>As well as computed properties, watchers provide a way of reacting to data changes. They are more useful when dealing with heavy data operation or asynchronous calls and they can provide with intermediate states </p>
        <p>
            Ask a yes/no question:
            <input v-model="question" :disabled="loading" />
        </p>
        <p>{{ answer }}</p>

    </article>
</template>
