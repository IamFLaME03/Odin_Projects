class Node {
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
}
class Linkedlist {
    constructor(){
        this.head = new Node('head', null);
    }

    append(value) {
        let lastNode = this.head;
        while(lastNode.next !== null)  lastNode = lastNode.next;
        lastNode.next = new Node(value, null)
    }

    prepend(value){
        let back = this.head.next;
        this.head.next = new Node(value, back);
    }

    size(){
        let count = 0;
        let temp = this.head;
        while(temp.next !== null){
            temp = temp.next;
            count++;
        }
        return count;
    }

    head(){
        return this.head.next;
    }

    tail(){
        let temp = this.head.next;
        while( temp.next !== null) temp = t.next;
        return temp;
    }

    at(index){
        if(index < 0)    return 'Invalid Index';
        let temp = this.head;
        while(index !== -1){
            if(temp.next === null) return null
            temp = temp.next;
            index--;
        }
        return temp;
    }

    pop(){
        let temp = this.head;
        if(temp.next === null) 
            return temp.next;
    
        while(temp.next.next !== null) 
            temp = temp.next;

        let lastNode = temp.next;
        temp.next = null;
        return lastNode;
    }

    contains(value){
        let temp = this.head;
        while(temp.next !== null){
            temp = temp.next;
            if(temp.value === value){
                return true;
            }
        }
        return false;
    }
    
    find(value){
        let temp = this.head;
        let count = -1;
        while(temp.next !== null){
            temp = temp.next;
            count++;
            if(temp.value === value){
                return count;
            }
        }
        return null;
    }

    insertAt(value, index){
        if(index < 0)    return 'Invalid Index';
        let temp = this.head;

        while(index !== 0 && temp.next !== null){
            temp = temp.next;
            index--;
        }
        let back = temp.next;
        temp.next = new Node(value, back);
    }

    removeAt(index){
        if(index < 0)    return 'Invalid Index';
        let temp = this.head;
        while(index !== 0){
            if(temp.next === null) return 'Invalid Index';
            temp = temp.next;
            index--;
        }
        let back = temp.next.next;
        let popedNode = temp.next;
        temp.next = back;
        return popedNode;
    }

    toString(){
        let temp = this.head;
        let str = '';
        while(temp.next !== null ){
            temp = temp.next;
            str += `( ${temp.value} ) -> `;
        }
        str += ' null';
        return str;
    }

}

let list=  new Linkedlist();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());