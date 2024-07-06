AOS.init();

// pega a data do evento
const dataDoEvento = new Date("Aug 1, 2024 19:00:00"); 
// Jul 5, 2024 19:00:00
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHrs = setInterval(function() {
    // pega a data de hoje
    const dataHoje = new Date();
    const timeStampAtual = dataHoje.getTime();

    const distanciaAteEvento = timeStampDoEvento - timeStampAtual;

    const diasEmMs = 1000 * 60 * 60 * 24;
    const hrsEmMs = 1000 * 60 * 60;
    const minEmMs = 1000 * 60 ;

    const DiasAteEvento = Math.floor(distanciaAteEvento / diasEmMs);
    const  HorasAteEvento = Math.floor(distanciaAteEvento % diasEmMs / hrsEmMs);
    const MinutosAteEvento = Math.floor(distanciaAteEvento % hrsEmMs / minEmMs);
    const SegundosAteEvento = Math.floor(distanciaAteEvento % minEmMs / 1000)

    document.getElementById('contador').innerHTML = `${DiasAteEvento} Dias : ${HorasAteEvento} Horas : ${MinutosAteEvento} Minutos : ${SegundosAteEvento} Segundos`

    if (distanciaAteEvento < 0 ) {
        clearInterval(contaAsHrs);
        document.getElementById('contador').innerHTML = 'A Promoção acabou'
    }

},1000)