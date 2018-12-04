import * as layouts from 'openfin-layouts';

document.addEventListener('DOMContentLoaded', async () => {
    await Promise.all([
        fin.Application.createFromManifest('http://localhost:8085/app/app2.json').then(app => app.run()),
        fin.Application.createFromManifest('http://localhost:8085/app/app3.json').then(app => app.run())
    ]);

    await layouts.createTabGroup([
        {uuid: 'OpenfinPOC-3fadfsdd', name: 'OpenfinPOC-3fadfsdd'},
        {uuid: 'OpenfinPOC-123fdsfds', name: 'OpenfinPOC-123fdsfds'},
        {uuid: 'OpenfinPOC-3jffdsfdsfsdw0d', name: 'OpenfinPOC-3jffdsfdsfsdw0d'}
    ]);
});
