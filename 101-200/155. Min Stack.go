package main
type MinStack struct {
    S []int
    X []int
}


func Constructor() MinStack {
    return MinStack{
        S: make([]int, 0),
        X: make([]int, 0),
    }
}


func (this *MinStack) Push(val int)  {
    this.S= append(this.S, val)
    pos := len(this.X)-1
    if pos >= 0  && this.X[pos] < val {
        this.X = append(this.X, this.X[pos])
    } else {
        this.X = append(this.X, val)
    }
   
}


func (this *MinStack) Pop()  {
    if len(this.S) > 0 {
        this.S = this.S[:len(this.S)-1]
        this.X = this.X[:len(this.X)-1]
    }
}


func (this *MinStack) Top() int {
    if len(this.S) > 0 {
        return this.S[len(this.S)-1]
    }
    return -1
}


func (this *MinStack) GetMin() int {    
    if len(this.X) > 0 {
        return this.X[len(this.X)-1]
    }
    return -1
}


/**
 * Your MinStack object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Push(val);
 * obj.Pop();
 * param_3 := obj.Top();
 * param_4 := obj.GetMin();
 */