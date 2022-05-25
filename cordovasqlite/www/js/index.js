
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log("function onDeviceReady(){...");
    let configuraBanco = {
        name: 'meusqlite',
        location: 'default',
        androidDatabaseProvider: 'system'
    };

    let banco = window.sqlitePlugin.openDatabase();

    alert(banco);

    console.dir(banco);

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}
