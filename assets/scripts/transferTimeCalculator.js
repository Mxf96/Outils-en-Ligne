function calculateTransferTime() {
    let dataSize = parseFloat(document.getElementById('dataSize').value);
    let dataSizeUnit = document.getElementById('dataSizeUnit').value;
    let speed = parseFloat(document.getElementById('speed').value); // Vitesse en Mbps

    // Convertir la taille des données en MB selon l'unité sélectionnée
    switch (dataSizeUnit) {
        case 'KB':
            dataSize /= 1024; // Convertir de Ko en Mo
            break;
        case 'GB':
            dataSize *= 1024; // Convertir de Go en Mo
            break;
        case 'TB':
            dataSize *= 1024 * 1024; // Convertir de To en Mo
            break;
        // Pas de cas pour MB car c'est déjà en Mo
    }

    // Convertir la vitesse en MBps
    let speedMBps = speed / 8;

    // Calculer le temps en secondes
    let timeInSeconds = dataSize / speedMBps;

    // Convertir le temps en format lisible
    let timeFormatted = secondsToHms(timeInSeconds);

    document.getElementById('resultTime').innerText = timeFormatted;
}

function secondsToHms(d) {
    d = Number(d);
    let h = Math.floor(d / 3600);
    let m = Math.floor(d % 3600 / 60);
    let s = Math.floor(d % 3600 % 60);

    return `${h}h ${m}m ${s}s`;
}