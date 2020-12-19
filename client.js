async function getData() {
    let url = 'http://localhost/penduduk/penduduk';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderData() {
    let json = await getData();
    let html = '';

    console.log(json);
    json.data.forEach(data => {
        let htmlSegment = `
            <div class="card mr-4 mb-4" style="width: 18rem;" >
                <div class="card-body">
                    <h5 class="card-title">${data.nama}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">ID : ${data.id}</h6>
                    <br>
                    <button class="card-link btn btn-info" id="set-detail" data-target="#modal-detail" data-toggle="modal" data-nama="${data.nama}" data-id="${data.id}" data-alamat="${data.alamat}" data-notelp="${data.notelp}">Detail</button>
                </div>
            </div>
                        `;

        html += htmlSegment;
    });

    let container = document.querySelector('#tampil');
    container.innerHTML = html;
}

renderData();

$(document).ready(function () {
    $(document).on('click', '#set-detail',function () {
        var nama = $(this).data('nama');
        var id = $(this).data('id');
        var alamat = $(this).data('alamat');
        var notelp = $(this).data('notelp');

        $('#modal-nama').html(nama);     
        $('#modal-id').html(id);     
        $('#modal-alamat').html(alamat);     
        $('#modal-notelp').html(notelp);     
    });
});

