let temperatura = 0
basic.forever(function () {
    temperatura = input.temperature()
    if (temperatura == 10) {
        basic.showString("¡Vamos a esquiar!")
    }
    if (temperatura == 20) {
        basic.showString("¡Hagamos un picnic!")
    }
    if (temperatura == 30) {
        basic.showString("¡Vamos a la playa!")
    }
    if (temperatura == 40) {
        basic.showString("Mejor no salgas")
    }
})
