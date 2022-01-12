let b = document.getElementById("carogame");

let board = []; // khai báo biến mảng board
let data = "";
for (let i = 0; i < 5; i++) {
    board[i] = new Array(0, 0, 0, 0, 0); // vòng lặp tạo ra 1 mảng board chứa 5 mảng [0,0,0,0,0]
}

for (let i = 0; i < 5; i++) {    // vòng lặp 5 lần xuống dòng biến data (vậy data ở đây là gì?)
    data += "<br/>";
    for (let j = 0; j < 5; j++) {   // i=0, j lần lượt chạy từ 0->5 data đc tạo ra bởi b[0][0], 01 02 03 04
                                    // ta được data như sau 0 space 0 space 0 space 0 space 0 space
                                    //Chạy i 5 lần, hết 1 lần lại xuống dòng thì đc 5 dòng mỗi dòng 5 số 0
        data += board[i][j]+ "&nbsp;&nbsp;" ;// tạo ra khoảng trắng giữa các ô
    }
}

data += "<br/><br/><input type='button' value='Change Value' onclick='changeValue()'>"
b.innerHTML = data;

function changeValue() {
    let positionX = prompt("X: ");
    let positionY = prompt("Y: ");
    data = "";
    board[positionX][positionY] = "x"; // Thay phần tử tại vị trí XY bằng x
    for (let i = 0; i < 5; i++) {      // chạy 5 dòng data tạo ra bởi <br> data mới là gì?
        data += "<br/>";
        for (let j = 0; j < 5; j++) {   // data mới đc tạo ra giống như trên, khác là vị trí XY đã đổi thành x.
            data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;"; //Tại sao lại dùng 4 dấu cách? 2 hay 4 đều được nhưng 4 dễ nhìn hơn.
        }
    }
    data += "<br/><br/><input type='button' value='Change Value' onclick='changeValue()'>"
    // b.innerHTML =  "<hr/>"+ data;
}
