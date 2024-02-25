var expression = '';
var key = '';
var result = 0;

function display(){
    document.querySelector('.display').value = expression;
}

function all_clear(){
    expression = '';
    display();
};

function clear(){
    document.querySelector('.display').value = '';
}

function clicked_button(){
    expression += $(this).text();
    display();
};

function evaluate(){
    expression = document.querySelector('.display').value;
    try{
        result = eval(expression);
        expression = result.toString();
        document.querySelector('.display').value = result;
    }
    catch (error){
        alert("Invalid Expression")
    }
};

function del(){
    expression = expression.slice(0,-1);
    display();
}

function change_sign(){
    result = (0-result);
    expression = result.toString();
    display();
}

function square(){
    expression += '**2';
    display();
}

document.addEventListener('keydown', function(e){
    press(e);
})



$('.all-clear').click(all_clear);

$('.clear').click(clear);

$('.one, .two, .three, .four, .five, .six, .seven, .eight, .nine, .d_zero, .zero, .decimal, .open_p, .close_p, .multiply, .divide, .plus, .minus, .modulo').click(clicked_button);

$('.plus-minus').click(change_sign);

$('.square').click(square);

$('.del').click(del);

$('.equal').click(evaluate);

function press(e){
    if (e.key == 'Enter'){
        evaluate();
    }
}