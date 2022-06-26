// 提取promise的值类型
// type getPromiseValueType<T> = T extends Promise<infer value> ? value : never
// type testPromiseType = getPromiseValueType<Promise<'guangdong'>>

// 提取函数返回类型
// type getFuncType<T extends Function> = T extends () => infer value ? value : never
// type testFuncType = getFuncType<() => string>

// 提取函数参数类型
// type getArgType<T> = T extends (arg: infer argType) => void ? argType : true
// const p = (arg: string) => arg
// type foo = getArgType<typeof p>

// 字符串提取
// type withStr<str extends string, prefix extends string> = str extends `${prefix}${string}` ? true : false
// type res = withStr<'guangdong', 'guang'> 

// 字符串替换
// type replaceStr<
//     str extends string,
//     from extends string,
//     to extends string
//     > = str extends `${infer staf}${from}${infer prefix}` ? `${staf}${to}${prefix}` : str
// type res = replaceStr<'my fav food is ?', '?', 'apple'>

// 数组提取
// type getFirst<arr extends unknown[]> = arr extends [infer first, ...unknown[]] ? first : []
// type res = getFirst<[1, 2, 3, 4]>
// type getLast<arr extends unknown[]> = arr extends [...infer reset, infer last] ? last : []
// type res = getLast<[1, 2, 3]>
// type getOther<arr extends unknown[]> = arr extends [infer first, ...infer reset] ? reset : []
// type res = getOther<[1, 2, 3, 4]>

