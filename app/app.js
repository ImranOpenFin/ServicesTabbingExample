import * as layouts from 'openfin-layouts';

document.addEventListener('DOMContentLoaded', async () => {
    await Promise.all([
        fin.Application.createFromManifest('http://localhost:8085/app/app2.json').then(app => app.run()),
        fin.Application.createFromManifest('http://localhost:8085/app/app3.json').then(app => app.run())
    ]);

    await layouts.createTabGroup([
        {uuid: 'OpenfinApp1-abcd', name: 'OpenfinApp1-abcd'},
        {uuid: 'OpenfinApp2-abcdef', name: 'OpenfinApp2-abcdef'},
        {uuid: 'OpenfinApp3-abcdefghi', name: 'OpenfinApp3-abcdefghi'}
    ]);
});
