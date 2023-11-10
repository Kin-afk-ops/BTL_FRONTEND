<template>
  <div class="product__desc main__container">
    <div class="product__desc--content" ref="productDescContent">
      <p>
        Nhiều người trong chúng ta tin rằng cuộc đời của ta bắt đầu từ lúc chào
        đời và kết thúc khi ta chết. Chúng ta tin rằng chúng ta tới từ cái
        Không, nên khi chết chúng ta cũng không còn lại gì hết. Và chúng ta lo
        lắng vì sẽ trở thành hư vô.
      </p>
      <p>
        Bụt có cái hiểu rất khác về cuộc đời. Ngài hiểu rằng sống và chết chỉ là
        những ý niệm không có thực. Coi đó là sự thực, chính là nguyên do gây
        cho chúng ta khổ não. Bụt dạy không có sinh, không có diệt, không tới
        cũng không đi, không giống nhau cũng không khác nhau, không có cái ngã
        thường hằng cũng không có hư vô. Chúng ta thì coi là Có hết mọi thứ. Khi
        chúng ta hiểu rằng mình không bị hủy diệt thì chúng ta không còn lo sợ.
        Đó là sự giải thoát. Chúng ta có thể an hưởng và thưởng thức đời sống
        một cách mới mẻ.
      </p>
      <p>
        Không diệt Không sinh Đừng sợ hãi là tựa sách được Thiền sư Thích Nhất
        Hạnh viết nên dựa trên kinh nghiệm của chính mình. Ở đó, Thầy Nhất Hạnh
        đã đưa ra một thay thế đáng ngạc nhiên cho hai triết lý trái ngược nhau
        về vĩnh cửu và hư không: “Tự muôn đời tôi vẫn tự do. Tử sinh chỉ là cửa
        ngõ ra vào, tử sinh là trò chơi cút bắt. Tôi chưa bao giờ từng sinh cũng
        chưa bao giờ từng diệt” và “Nỗi khổ lớn nhất của chúng ta là ý niệm về
        đến-đi, lui-tới.”
      </p>
      <p>
        Được lặp đi lặp lại nhiều lần, Thầy khuyên chúng ta thực tập nhìn sâu để
        chúng ta hiểu được và tự mình nếm được sự tự do của con đường chính
        giữa, không bị kẹt vào cả hai ý niệm của vĩnh cửu và hư không. Là một
        thi sĩ nên khi giải thích về các sự trái ngược trong đời sống, Thầy đã
        nhẹ nhàng vén bức màn vô minh ảo tưởng dùm chúng ta, cho phép chúng ta
        (có lẽ lần đầu tiên trong đời) được biết rằng sự kinh hoàng về cái chết
        chỉ có nguyên nhân là các ý niệm và hiểu biết sai lầm của chính mình mà
        thôi.
      </p>
      <p>
        Tri kiến về sống, chết của Thầy vô cùng vi tế và đẹp đẽ. Cũng như những
        điều vi tế, đẹp đẽ khác, cách thưởng thức hay nhất là thiền quán trong
        thinh lặng. Lòng nhân hậu và từ bi phát xuất từ suối nguồn thâm tuệ của
        Thiền sư Thích Nhất Hạnh là một loại thuốc chữa lành những vết thương
        trong trái tim chúng ta.
      </p>
    </div>

    <div class="product__desc--btn">
      <button class="main__btn" ref="productDescBtn" @click="handleDesc">
        Xem thêm
      </button>
    </div>
  </div>
</template>
<script>
let longText = false;
export default {
  methods: {
    handleDesc() {
      longText = !longText;
      if (longText) {
        this.$refs.productDescBtn.innerText = "Thu gọn";
        this.$refs.productDescBtn.classList.add("product__desc--btn-active");
        this.$refs.productDescContent.style.maxHeight = "initial";
      } else {
        this.$refs.productDescBtn.innerText = "Xem thêm";
        this.$refs.productDescBtn.classList.remove("product__desc--btn-active");
        this.$refs.productDescContent.style.maxHeight = "150px";
      }
    },
  },
};
</script>
<style>
@import "./productDesc.css";
</style>
