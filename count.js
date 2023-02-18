var dbName = 'sampleDB';
var dbVersion = '1';
var storeName  = 'counts';
var count = 0;
//�@DB�����w�肵�Đڑ�
var openReq  = indexedDB.open(dbName, dbVersion);

// �G���[��
openReq.onerror = function (event) {
    // �ڑ��Ɏ��s
    console.log('db open error');
}

//DB�̃o�[�W�����X�V(DB�̐V�K�쐬���܂�)���̂ݎ��s
openReq.onupgradeneeded = function (event) {
    var db = event.target.result;
    const objectStore = db.createObjectStore(storeName, {keyPath : 'id'})
    objectStore.createIndex("id", "id", { unique: true });
    objectStore.createIndex("cnt", "cnt", { unique: false });

    console.log('db upgrade');
}

//onupgradeneeded�̌�Ɏ��s�B�X�V���Ȃ��ꍇ�͂��ꂾ�����s
openReq.onsuccess = function (event) {
    var db = event.target.result;
    var trans = db.transaction(storeName, 'readonly');
    var store = trans.objectStore(storeName);
    var getReq = store.get(1);

    getReq.onerror = function (event) {
        count = 0;
        console.log('�擾���s');
    }
    getReq.onsuccess = function (event) {
        console.log('�擾����');
        if (typeof event.target.result === 'undefined') {
            count = 0;
        } else {
            count = event.target.result.cnt;
            console.log(count);
        }
        document.getElementById('countDisplay').innerHTML = count;
    }


    document.getElementById('countUp').addEventListener('click', function () {
        count++;
        var putReq = updateDb(db, storeName, count);

        putReq.onsuccess = function (event) {
            console.log('�X�V����');
            document.getElementById('countDisplay').innerHTML = count;
        }
        putReq.onerror = function (event) {
            console.log('�X�V���s');
        }
    });

    document.getElementById('countDown').addEventListener('click', function () {
        count--;
        var putReq = updateDb(db, storeName, count);

        putReq.onsuccess = function (event) {
            console.log('�X�V����');
            document.getElementById('countDisplay').innerHTML = count;
        }
        putReq.onerror = function (event) {
            console.log('�X�V���s');
        }
    });

    document.getElementById('countReset').addEventListener('click', function () {
        count = 0;
        var putReq = updateDb(db, storeName, count);

        putReq.onsuccess = function (event) {
            console.log('�X�V����');
            document.getElementById('countDisplay').innerHTML = count;
        }
        putReq.onerror = function (event) {
            console.log('�X�V���s');
        }
    });    
}

function updateDb (db, store_name, cnt) {
    var trans = db.transaction(store_name, "readwrite");
    var store = trans.objectStore(store_name);
    return store.put({
        id: 1,
        cnt: cnt
    });
}