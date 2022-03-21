# 4. Hafta Ödevi

Ürün satışının, kullanıcı kaydının ve girişinin yapıldığı, web uygulaması geliştirilecek.


<strong>Fonksiyoneliteler: </strong>

• Uygulama responsive tasarımı desteklemeli, mobil ve bilgisayar ekranlarına uyumlu 
çalışmalı (ui component frameworkleri, libraryleri kullanılabilir)  
> Uygulama elden geldiği kadarıyla bootstrap kullanılarak responsive tasarlanmıştır.
• Kullanıcılar uygulamaya üye olabilmeli ve giriş yapabilmeli (json dosyasına kayıt 
oluşturulup, json dosyasından doğrulama yapılabilir, ya da ekstra bir api yazılabilir) 
> Kullanıcılar log in  ve sign in ile reactive form tasarımı yaklaşımı kullanılarak router kullanılarak json server yardımı ile json dosyasına kayıt ve json dosyasından http istekleri ile kayıt ve giriş işlemleri gerçekleştirilmiştir.
> Kullanıcı json dosyasında var ise local document'e isLogin true yazılmış ve main sayfasına route edilmiştir. Direk main sayfasına giriş yapılamamaktadır. 
• Ürün kartında bulunması gerekenler; ürünlerin resmi, adı, açıklaması ve fiyatı  
> Ürün kartı bootstrapten alınmış ve üzerinde küçük değişiklikler yapılmıştır.
• Ürün listesi ana sayfada gösterilmeli, kullanıcılar isterlerse ürünlerin detayına, 
ürünlerin üzerine tıklayarak bakabilmeli  
> Ürün listesi main onInit json serverdan yüklenerek cardlar listelenmektedir. Ürünün adına, resmine, kısa açıklamasına yada fiyata tıklanarak ürünlerin detayına bakabiliyorlar.
• Ürünlerin detay sayfasında, ürünün daha büyük bir resmi ve daha detaylı bir açıklama 
metni olmalı  
> Ürünlerin detay sayfasına ürünlerin üzerine tılanarak router yardımıyla yeni bir product sayfasında gösterilmektedir.
• Ürünlerin filtrelenmesi için; kategori seçeneği (dropdown, selector, kategorileri siz 
belirlemelisiniz) ve bir arama çubuğu oluşturulmalı, anahtar kelimesinin ürün adında 
geçip geçmediğine bakılmalı  
> Header da buluna bir input yardımıyla ürünlerin titlarına bakılarak filtreleme gerçekleştirilmekte ve dropdown menü yardımı ile ürünler kategorize edilebilmektedir.
• Ürün detayına gidilirken, sayfa yönlendirilmesi (routing) yapılmalı  
> Routing yapıldı.
• Ürünler kendinizin belirleyeceği bir json kaynak dosyasından alınmalı  
> Ürünler json sayfasından alınmaktadır, resimler 'hepsiburada.com'dan src edilmektedir.
• Ürünler sepete eklenip daha sonrasında satış işlemi gerçekleştirilmeli  
> Ürünler sepete eklenebilmekte, mainde bulunan basket kısa yolu ile basket kısmı gözükmekte ve basket kısmında ürüler sepetten tek tek çıkarılabilir, tüm sepet silinebilir ve satış işlemi gerçekleştirilebilir.
• Satış işlemi için ayrı bir json dosyasına log kaydı atılması yeterli  
> json dosyasında var olan spendProduct kısmında kayıt işlemi kaydı tutulmaktadır.
• Kullanıcı sisteme giriş yapmadan ürünleri görmemeli  
> Kullanıcılar sistemde kaydı olmadan ve giriş yapmadan ürünleri görememektedir.

<strong>Gereklilikler: </strong>

• Reactive form yaklaşımı kullanılmalı  
> Kullanıcı giriş ve kayıt kısmında kullanılmıştır.
• Form işlemlerinde validasyon yönetimi yapılmalı ve kullanıcı dostu bir uyarı mesajı 
üretilmeli  
> alert ile kullanıcı bilgilerndirmeleri yapılıp gerekli routing işlemleri gerçekleştirilmiştir.
• Http istekleri için HttpClient paketi kullanılmalı  
> Paket kullanılmıştır.
• Comment kullanımına dikkat edilmeli  
• TypeScript özelliklerinden type ve access modifiers kullanımına dikkat edilmeli  


<strong>Ekstralar: </strong>

• Ürünlerin detay kısmında, ürün ile ilgili oluşturulacak dummy(sahte) yorumların ve 
değerlendirmelerin görüntülenmesi  
> sahte yorumlar görüntülendi ve rating olarak 5 üzerinden değerlirmeler gösterildi.
• Component mimarisinin anlaşılır, tekrar kullanılabilecek şekilde kurgulanması  


Teknolojiler: Angular (13), JavaScript, TypeScript

component mimarisi : 
• basket : Sepet işlemleri için kullanacaktım fakat tasarım hatası ile mainde bunu oluşturdum.
• header : Navigasyon barı
• login : login sayfası
• main : ürünlerin listelenmesi ve basket componentinin gösterildiği yer.
• product : ürün sayfası
• signup : kayıt işlemleri

service : 
• basket : sepet ile ilgili işlemler.
• products : http istekleri, ürünlerin ve postların get edilmesi.

shared : 
• search.pipes : filtreleme işlemleri

Not : Şimdi olsa tüm işlemler için serviler oluşturur ve heryerden ulaşılabilir yapardım, model kullanmadım post kullanıcılar ve ürün işşlemleri için model oluştururdum ve kullanıcı girişi, kayıt olma ve kullanıcı sepetini tek sayfada yapardım.

