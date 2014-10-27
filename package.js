Package.describe({
    summary: "jQuery DataTables with Bootstrap3 JS & CSS",
    name: "loftsteinn:datatables-bootstrap3",
    version: "1.10.3",
    git: "https://github.com/oskarszoon/meteor-datatables-bootstrap3"
});

Package.on_use(function (api) {
    api.use('jquery@1.0.0', 'client');
    // disabled so user can choose own bootstrap library
    //api.use('ian:bootstrap-3@1.0.3', 'client');
    api.add_files([
        'lib/jquery.dataTables.js',
        'lib/datatables.js',
        'lib/jquery.dataTables.css',
        'lib/datatables.css',
        'lib/images/sort_asc.png',
        'lib/images/sort_asc_disabled.png',
        'lib/images/sort_both.png',
        'lib/images/sort_desc.png',
        'lib/images/sort_desc_disabled.png',
    ], 'client');
});

Package.on_test(function (api) {
    api.use([
        'loftsteinn:datatables-bootstrap3',
        'test-helpers',
        'tinytest'
    ], ['client']);

    api.add_files("tests/test.js", ['client']);
});
