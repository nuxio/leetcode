递归解决

每次交换两个数值

输入：

a -> b -> c -> d

```js
a.next = b.next // a -> c -> d, b -> c -> d
b.next = a // b -> a -> c -> d

a.next = swap(b.next) // 递归传入 b.next 也就是 c，进行上面一样的操作

return b // 输出 b -> a -> d -> c
```
