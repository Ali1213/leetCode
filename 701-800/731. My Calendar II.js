/* Implement a MyCalendarTwo class to store your events. A new event can be added if adding the event will not cause a triple booking.

Your class will have one method, book(int start, int end). Formally, this represents a booking on the half open interval [start, end), the range of real numbers x such that start <= x < end.

A triple booking happens when three events have some non-empty intersection (ie., there is some time that is common to all 3 events.)

For each call to the method MyCalendar.book, return true if the event can be added to the calendar successfully without causing a triple booking. Otherwise, return false and do not add the event to the calendar.

Your class will be called like this: MyCalendar cal = new MyCalendar(); MyCalendar.book(start, end)
Example 1:
MyCalendar();
MyCalendar.book(10, 20); // returns true
MyCalendar.book(50, 60); // returns true
MyCalendar.book(10, 40); // returns true
MyCalendar.book(5, 15); // returns false
MyCalendar.book(5, 10); // returns true
MyCalendar.book(25, 55); // returns true
Explanation: 
The first two events can be booked.  The third event can be double booked.
The fourth event (5, 15) can't be booked, because it would result in a triple booking.
The fifth event (5, 10) can be booked, as it does not use time 10 which is already double booked.
The sixth event (25, 55) can be booked, as the time in [25, 40) will be double booked with the third event;
the time [40, 50) will be single booked, and the time [50, 55) will be double booked with the second event.
Note:

The number of calls to MyCalendar.book per test case will be at most 1000.
In calls to MyCalendar.book(start, end), start and end are integers in the range [0, 10^9]. */


// beat 50%
var MyCalendarTwo = function() {
    this.first = [];
    this.second = []
};
/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function(start, end) {
    
    let i = start
    
    for(let i = 0; i< this.second.length; i+=2){
        if(end > this.second[i] && this.second[i+1] > start){
            return false
        }
    }
    for(let i = 0; i< this.first.length; i+=2){
        if(end > this.first[i] && this.first[i+1] > start){
            this.second.push(Math.max(start,this.first[i]), Math.min(this.first[i+1], end))
        }
    }
    this.first.push(start,end)
    return true;
};

/** 
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = Object.create(MyCalendarTwo).createNew()
 * var param_1 = obj.book(start,end)
 */




// beat 53.57%
// 看来构造数组的代价其实挺小的， 猜测可能是虽然构造了数组，但变相的减少了因长度增加导致数组复制的次数

var MyCalendarTwo = function() {
    this.first = [];
    this.second = []
};
/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function(start, end) {
    
    let i = start
    
    for(let i = 0; i< this.second.length; i++){
        if(end > this.second[i][0] && this.second[i][1] > start){
            return false
        }
    }
    for(let i = 0; i< this.first.length; i++){
        if(end > this.first[i][0] && this.first[i][1] > start){
            this.second.push([Math.max(start,this.first[i][0]), Math.min(this.first[i][1], end)])
        }
    }
    this.first.push([start,end])
    return true
};

/** 
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = Object.create(MyCalendarTwo).createNew()
 * var param_1 = obj.book(start,end)
 */