const STACK_KEY = 'myStack';

function getStack() {
    return JSON.parse(localStorage.getItem(STACK_KEY) || '[]');
}

function saveStack(stack) {
    localStorage.setItem(STACK_KEY, JSON.stringify(stack));
}

function updateDisplay() {
    const stackDisplay = document.getElementById('stack-display');
    const stack = getStack();
    stackDisplay.innerHTML = '<h3>스택 내용:</h3>' + stack.join('<br>');
}

function pushItem() {
    const input = document.getElementById('item-input');
    const item = input.value.trim();
    if (item) {
        const stack = getStack();
        stack.push(item);
        saveStack(stack);
        input.value = '';
        updateDisplay();
    }
}

function popItem() {
    const stack = getStack();
    if (stack.length > 0) {
        const item = stack.pop();
        saveStack(stack);
        alert(`팝된 아이템: ${item}`);
        updateDisplay();
    } else {
        alert('스택이 비어 있습니다.');
    }
}

function peekItem() {
    const stack = getStack();
    if (stack.length > 0) {
        alert(`스택의 최상위 아이템: ${stack[stack.length - 1]}`);
    } else {
        alert('스택이 비어 있습니다.');
    }
}

function clearStack() {
    localStorage.removeItem(STACK_KEY);
    updateDisplay();
}

// 초기 디스플레이 업데이트
updateDisplay();