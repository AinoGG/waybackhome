<template>
    <section class="wrapper">
        <div class="container flex-jcc-aic intro-wrapper">
            <button class="title-button__blue mt-16">Предисловие</button>
            <div class="intro-text" ref="textIntro">
                <p>
                    Приветствую тебя странник, совсем скоро тебя занесет в увлекательное путешествие, приготовь всю свою
                    фантазию, смекалку и не забудь взять удачу. Тебе предстоит делать нелегкий выбор на пути к победе.
                    Общаться со множеством персонажей и сражаться с разными по силе соперниками.
                </p>
                <p>
                    Игра представляет собой текстовую новеллу, с элементами стратегического пошагового боя. Делая выбор
                    ты идешь по уникальному сюжету, который автор написал для тебя. Никогда не знаешь что ждет тебя за
                    поворотом. Настрой своего персонажа и отправляйся в путь.
                </p>
            </div>
            <div class="intro-buttons mt-16">
                <button class="button-start__red" @click="backToMainscreen">В меню</button>
                <button class="button-start__red" @click="$emit('nextStep')">В путь</button>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
const router = useRouter()
function backToMainscreen() {
    router.push('/')
}

const textIntro = ref<HTMLElement>(null!) 

function animateText() {
    textIntro.value.style.left = '50%'
    textIntro.value.style.transform = 'translate(-50%, -50%)'
}

onMounted(() => {    
    setTimeout(() => {
        animateText()
    }, 300)
})
</script>

<style lang="scss" scoped>
.wrapper {
    background: center / cover no-repeat url('../../assets/images/playground/introBG.jpg');
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
}

.intro-wrapper {
    justify-content: space-between;
    height: 100%;
    padding: 24px 0;
    position: relative;
}



.intro-text {
    position: absolute;
    top: 50%;
    left: -200%;
    transform: translateY(-50%);
    width: 100%;
    background: rgba($color: #055AC5, $alpha: 0.42);
    padding: 48px 24px;
    margin-top: 16px;
    border-radius: 16px;
    transition: all .6s ease-in-out;

    p {
        width: 100%;
        color: #fff;
        font-size: 32px;
    }

    p+p {
        margin-top: 16px;
    }
}

.flex-jcc-aic {
    flex-direction: column;
}

.button-start__red {
    height: 70px;
}

.intro-buttons {
    display: flex;
    gap: 8px;

}
</style>