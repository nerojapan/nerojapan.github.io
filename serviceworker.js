
var CACHE_NAME = 'pwa-sample-cache-v2';
var urlsToCache = [
    '/',
    '/manifest.json',
    '/css/style.css',
    '/js/serviceworker.js',
    '/js/count.js',
];

// �C���X�g�[������
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then(function(cache) {
                return cache.addAll(urlsToCache);
            })
    );
});

// ���\�[�X�t�F�b�`���̃L���b�V�����[�h����
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches
            .match(event.request)
            .then(function(response) {
                return response ? response : fetch(event.request);
            })
    );
});
