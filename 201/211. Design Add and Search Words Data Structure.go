package main


// Runtime
// 778 ms
// Beats
// 59.7%
// Memory
// 51.8 MB
// Beats
// 69.65%
type Node struct {
	Children map[rune]*Node
	IsWord   bool
}
type WordDictionary struct {
	root *Node
}

func Constructor() WordDictionary {
	return WordDictionary{
		&Node{},
	}
}

func (this *WordDictionary) AddWord(word string) {
	v := this.root
	for _, a := range word {
		if v.Children == nil {
			v.Children = make(map[rune]*Node)
		}
		
		if _, ok := v.Children[a]; !ok {
			v.Children[a] = &Node{
			}
		}
		v = v.Children[a]
	}
	v.IsWord = true
}

func (this *WordDictionary) Search(word string) bool {
	// fmt.Println(this.root)
	return this.Match(word, 0, this.root)
}

func (this *WordDictionary) Match(word string, index int, root *Node) bool {
	if root == nil {
		return false
	}

	if index == len(word) {
		return root.IsWord
	}

	if word[index] != '.' {
		return this.Match(word, index+1, root.Children[rune(word[index])])
	}

	for _, child := range root.Children {
		if this.Match(word, index+1, child) {
			return true
		}
	}
	return false
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * obj := Constructor();
 * obj.AddWord(word);
 * param_2 := obj.Search(word);
 */
