// Implement a function to check if a linked list is a palindrome.

//Solution
//Time Complexity: O(N)
//Space Complexity: O(N)
function palindrome(l1) {
    if(!l1.head) return false;
    let currentNode = l1.head;
    let naiveList = [];

    while(currentNode) {
        naiveList.push(currentNode.data);
        currentNode = currentNode.next;
    }
    
    return naiveList === naiveList.reverse();
}