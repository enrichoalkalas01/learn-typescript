/*

    ## Kompilasi Typescript ##
    -   Seperti yang dijelaskan di awal, bahwa kode Typescript tidak bisa langsung dijalankan,
        kita harus melakukan kompilasi terlebih dahulu menjadi javascript
    -   Kita bisa menggunakan perintah "npx tsc" untuk melakukan compile ke semua file typescript
    -   Secara default, semua file hasil kompilasi akan disimpan di lokasi yang sama dengan file
        Typescript
    -   Kadang, praktek programmer Typescript biasanya memisahkan lokasi hasil kompilasi ke sebuah
        folder seperti dist (distribution). Alasan nya agar file yang akan di kompilasi tidak akan
        masuk ke repository git
    -   Untuk mengubah lokasi file hasil kompilasi, kita perlu ubah di tsconfig.json
        cari "outDir": "dist/"
    

    ## Include & Exclude ##
    -   Secara default, semua file ts akan coba dikompilasi oleh Typescript, kadang - kadang kita
        tidak membutuhkan hal tersebut
    -   Misal kita hanya ingin melakukan kompilasi untuk kode program, dan tidak butuh melakukan
        kompilasi untuk kode unit test
        
        https://www.typescriptlang.org/tsconfig#include
        https://www.typescriptlang.org/tsconfig#exclude


    ## Tipe Data Primitif ##
    -   Typescript menggunakan tipe data Javascript, sehingga semua tipe data seperti string,
        number, boolean otomatis didukung oleh Typescript
    -   Perbedaan nya adalah ketika kita menggunakan Typescript, kita harus mendeklarasikan
        terlebih dahulu tipe data apa yang ingin kita pakai, tidak seperti javascript
        yang bebas / tidak perlu di deklarasikan tipe data nya.
    

    ## Deklarasi Variable ##
    -   Karena Typescript adalah Strongly Type Language, oleh karena itu saat kita membuat
        variable, kita harus menentukan tipe data variable nya
    -   Dan jika kita sudah menentukan tipe datanya, kita tidak boleh mengubah variable
        tersebut menjadi tipe data yang berbeda
    -   Typescript bisa secara otomatis mendeteksi tipe data yang sedang digunakan, tapi
        kita juga bisa menentukan secara eksplisit menggunakan :
        const NamaVariable:tipedata = value


    ## Babel Typescript ##
    -   Untuk menjalankan unit test, kita menggunakan jest dan babel
    -   Banyak programmer Typescript yang mengeluh ketika proses development, menggunakan
        Typscript lebih lambat karena harus melakukan cara kompilasi terlebih dahulu
    -   Oleh karena itu, @babel/typescript melakukan cara kompilasinya dengan cara
        menghapus seluruh kode Typescript dan menjadikan nya kedalam kode Javascript
        hal ini memang lucu, tapi inilah kenyataannya
    -   Oleh karena itu, error Typescript yang sering harusnya terjadi di Unit Test kadang
        tidak terjadi karena Typescript dihapus oleh babel
    -   oleh karena itu, kita harus secara regular melakukan pengecekan menggunakan perintah
        "npx tsc"
    -   Untuk memastikan tidak ada kode Typescript kita yang bermasalah

        const name:String = "Enricho Alkalas"
        name = 1
        console.info(name)

        terkadang untuk pengecekan didalam Unit Test, variable yang sudah diset kedalam tipe
        data yang benar, tetap saja bisa lolos dikarenakan variable tersebut akan tetap
        dirubah dan digunakan kedalam javascript, bukan typescript. makanya sangat disarankan
        agar selalu di cek berkala menggunakan "npx tsc" setelah menggunakan unit test jest
        atau lainnya. atau kita ingin melihat segala perubahan secara berkala ketika ada
        perubahan didalam code kita sebelum compile, kita bisa menggunakan syntax
        "npx tsc --watch"


    ## Tipe Data Array ##
    -   Tipe data array di typescript juga sama seperti di javascript, cara pembuatan
        dan penggunaan nya juga sama
    -   Di TS tipe data array, bisa menggunakan tanda TipeData[] atau Array<TipeData>

    ## Read Only Array ##
    -   Di typescript, kita bisa membuat array dengan tipe readonly ( tidak bisa diubah lagi )
        dengan menggunakan tipe data ReadonlyArray<TipeData>
    -   Sebenernya, ketika sudah dicompile kedalam javascript, data tersebut akan tetap bisa
        diubah karena basic nya berubah ke javascript, tetapi supaya tipe readonly nya tetap
        bisa terjaga itu terdapat pada compiler typescript nya.
    
    ## Tuple ##
    -   Tuple adalah tipe data Array, yang panjang array dan juga tipe data ditiap index
        sudah ditentukan
    -   Pada kasus tuple bersifat read only ( tidak bisa diubah ), kita bisa tambahkan
        kata kunci readonly

    
    ## Tipe Data Any ##
    -   Saat kita menggunakan Typescript, setiap jenis data idealnya ada deklarasi datanya
    -   Contoh saat kita ingin menggunakan tipe data Javascript Object, idealnya harusnya
        ada ketentuan attribute yang dimilikinya, sedangkan di javascript hal itu tidak
        diwajibkan
    -   Pada kasus kita memang ingin membuat tipe data yang bebas seperti di javascript,
        kita bisa gunakan tipe data Any
    -   Tipe data any tersebut menjadikan Typescript tidak melakukan pengecekan apapun
        terhadap akses terhadap data tersebut


    ## Union Type ##
    -   Seperti yang sudah kita tahu, Javascript sebenernya bisa menyimpan berbagai jenis
        tipe data variable yang sama
    -   Namun di Typescript, hal itu dilarang karena praktek yang buruk
    -   Pada kasus jika kita ingin membuat variable yang bisa berubah bentuk tipe data,
        kita bisa memberitahunya menggunakan union type
    -   Secara otomatis Typescript akan membolehkan kita mengubah tipe data, namun sesuai
        yang sudah ditentukan union type nya

    
    ## Menggunakan Union Type ##
    -   Saat kita membuat Union Type, kita perlu berhati - hati ketika memanggil method
        terhadap variable tersebut
    -   Hal ini karena tipe datanya bisa berubah, oleh karena itu baiknya kita melakukan
        pengecekan tipe data terlebih dahulu menggunakan typeof

    
    ## Type Alias ##
    -   Menggunakan tipe data Any sebenernya tidak direkomendasikan
    -   Biasanya kita akan menggunakan tipe data Any, jika memang datanya kita gunakan.
        misal dari library orang lain yang sudah tidak bisa diubah, atau memang ketika
        attribute nya tidak pasti datanya
    -   Pada kasus jika kita membuat tipe data Javascript object sendiri, kita bisa
        membuat alias untuk struktur tipe data object nya
*/