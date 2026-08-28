---
author: "Valentino Giudice"
date: 2026-08-28T05:45:21+02:00
draft: false
title: "Struct vs. Class"
---

The technical English words "struct" and "class" and the corresponding keywords `struct` and `class` have meanings that depend on the programming language of reference.

In this blog post I analyze the difference between the concept of "struct" and of "class" in four different programming languages: C++, C#, C++/CLI and D. All languages in consideration are statically typed and belong to the *C family*.

This is not an introduction to the programming languages I selected for reference, much less to programming itself. Some familiarity with these languages is assumed. The goal of this post is simply to compare them with regard to this specific aspect.

## C++

[C++](https://isocpp.org/) is standardized by the International Organization for Standardization and the International Electrotechnical Commission as [ISO/IEC 14882](https://www.iso.org/standard/83626.html).

A *[class type](https://cppreference.com/cpp/language/classes)* in C++ is declared (or defined) using a *class key*, which can be either [`class`](https://cppreference.com/cpp/keyword/class), [`struct`](https://cppreference.com/cpp/keyword/struct) or [`union`](https://cppreference.com/cpp/keyword/union). Unions are outside the scope of this post. For non-union classes, the class key determines default access, which is private for `class` and public for `struct`.

C++ supports [multiple inheritance](https://isocpp.org/wiki/faq/multiple-inheritance). Any class may be declared as [derived](https://en.cppreference.com/cpp/language/derived_class) directly from one or more base classes, which, in turn, may be derived from their own base classes, forming an inheritance hierarchy describable through a directed acyclic graph.

C *[structure types](https://en.cppreference.com/c/language/struct)* generally work as expected without modifications as C++ classes. They are commonly used to represent *[passive data structures](https://en.wikipedia.org/wiki/Passive_data_structure)* (or "plain old data structures") and fall within the wide intersection between the two languages that renders them largely compatible. Their members are public, reflecting the expected behaviour, because the `struct` keyword is used and no access specifiers are present (as they don't exist in C).

C++ provides multiple syntaxes for the [direct initialization](https://en.cppreference.com/cpp/language/direct_initialization) of an [object](https://en.cppreference.com/cpp/language/object). A [function-style cast](https://en.cppreference.com/cpp/language/explicit_cast) expression in the form `T(arg1, arg2, ...)` evaluates to an object that is an instance of class `T`. Prepending the `new` keyword makes this into a *new expression*.

[New expressions](https://en.cppreference.com/cpp/language/new) in C++ are used to create objects with independent dynamic memory allocation. They evaluate to a *pointer* to the created object. Objects instanced this way are individually destroyed through the  [`delete`](https://en.cppreference.com/cpp/language/delete) keyword.

The creation and initialization of a class instance involves calling a *[constructor](https://en.cppreference.com/cpp/language/constructor)* for that class, one with a signature compatible with the parameters used in the initializer.

The *[destructor](https://en.cppreference.com/cpp/language/destructor)* of a class is invoked on an instance when its lifetime ends. For objects with automatic [storage duration](https://en.cppreference.com/cpp/language/storage_duration), which include those stored in local variables or as temporary objects, this happens when their scope ends. For objects with dynamic storage duration, created through new expressions, this happens when a delete expression is executed.

Using a new expression is similar to, in C, allocating the necessary amount of memory for a data structure through [`malloc`](https://en.cppreference.com/c/memory/malloc), then invoking an initialization function on the pointer it returns. Using a delete expression is similar to calling a destroying function on that pointer, then deallocating the object's space through [`free`](https://en.cppreference.com/c/memory/free).

A null pointer in C++ is represented through [`NULL`](https://en.cppreference.com/cpp/types/NULL) or [`nullptr`](https://en.cppreference.com/cpp/language/nullptr), which has the special type [`std::nullptr_t`](https://en.cppreference.com/cpp/types/nullptr_t).

The class template [`std::optional`](https://en.cppreference.com/cpp/utility/optional) manages an optional contained value.

C++ also has *[references](https://en.cppreference.com/cpp/language/reference)*, which are conceptually very similar to pointers.

## C#

[C#](https://dotnet.microsoft.com/languages/csharp) is a [.NET](https://dotnet.microsoft.com/) language influenced by Java and designed and developed by Microsoft. It is standardized by Ecma International as [ECMA-334](https://ecma-international.org/publications-and-standards/standards/ecma-334/), as well as by ISO and IEC as [ISO/IEC 20619](https://www.iso.org/standard/86347.html).

C# has two kinds of types: *[reference types](https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/reference-types)* and *[value types](https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/value-types)*.

*[Class types](https://learn.microsoft.com/dotnet/csharp/fundamentals/types/classes)* in C# are reference types and have  *reference semantics*. Variables of reference types store *references* to their data. References are conceptually similar to pointers.

C# does not support multiple inheritance for classes (but does have [interfaces](https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/interface)). All classes except for [`object`](https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/reference-types#the-object-type) inherit from exactly one direct base class.

*[Struct types](https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/struct)* (or "structure types") in C# are value types and have *value semantics*. A variable whose type is a struct contains an instance of the struct.

All value types implicitly inherit from the [`System.ValueType`](https://learn.microsoft.com/dotnet/api/system.valuetype) class, which, as such, is a reference type and inherits from `object`. Value types cannot be the base of any other type.

All C# types fall into an inheritance tree and `object` is the root of the hierarchy.

The [`new`](https://learn.microsoft.com/dotnet/csharp/language-reference/operators/new-operator) operator is used to create a new instance of a type. Among *[new expressions](https://learn.microsoft.com/dotnet/csharp/language-reference/language-specification/expressions#12817-the-new-operator)*, *[object creation expressions](https://learn.microsoft.com/dotnet/csharp/language-reference/language-specification/expressions#128172-object-creation-expressions)* are used to create new instances of class types and value types. They evaluate to a reference to the created object, for class types, or to the actual object itself, as a temporary local variable, for value types.

For classes new expressions in C# are similar in meaning as in C++ and lead to dynamic memory allocation. For structs they are similar to direct initialization in C++ without `new` and do not.

C# is less flexible than C++. In C++ each instance of the same type can be granted dynamic memory allocation or not, depending on whether `new` is used. The decision is made when using the type. In C# it has to be made when declaring the type and is the same for all objects of that type.

C# also features [`ref` structs](https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/ref-struct). These are structs that can only be instanced on the stack and whose use is restricted so that instances are never created in dynamically-allocated memory (not even as part of larger objects). An example of this is [`System.Span<T>`](https://learn.microsoft.com/dotnet/api/system.span-1).

Certain C# keywords are aliases for .NET types. For example, `object` is simply an [alias](https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/reference-types#the-object-type) for the [`System.Object`](https://learn.microsoft.com/dotnet/api/system.object) class. C# *simple types*, such as [integral numeric types](https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/integral-numeric-types), are actually struct types. For example, `int` is simply an alias for the [`System.Int32`](https://learn.microsoft.com/dotnet/api/system.int32) struct.

The [`null`](https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null) keyword represents a reference that doesn't refer to any object, a special value that can be assigned to all reference types as well as nullable value types.

*[Nullable value types](https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/nullable-value-types)* represent all values of their underlying type plus an additional null value and correspond to the [`System.Nullable<T>`](https://learn.microsoft.com/dotnet/api/system.nullable-1) generic struct, which exposes the boolean `HasValue` property and the `Value` property of the underlying non-nullable type and has the shorter `T?` syntax as an alias. All other value types are non-nullable. The [`Nullable`](https://learn.microsoft.com/dotnet/api/system.nullable) class provides complementary support for the `Nullable<T>` struct.

All reference types allow the null value. Starting from [version 8.0](https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-version-history#c-version-80) of the language, not (yet) standardized by Ecma, the question mark syntax can also be used on a reference type to indicate that a variable may be null. *[Nullable reference types](https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/nullable-reference-types)* are otherwise equivalent to their underlying reference types. Their use does not affect the correctness or behaviour of the program. Nullable reference types and related features are optional. The *[nullable context](https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/nullable-reference-types#nullable-context)* determines how the compiler handles them.

Casting of a value type to a reference type (such as a class it inherits from or an interface it implements) happens through *[boxing](https://learn.microsoft.com/dotnet/csharp/programming-guide/types/boxing-and-unboxing)*. The reverse operation is *unboxing*. Boxing a value of a non-nullable type consists of allocating an object and copying the value to it. Boxing a value of a nullable type produces a null reference if it is null and the result of boxing the wrapped value if it isn't.

Instances of value types are destroyed as soon as their context is destroyed, as would happen in C++. Instances of reference types don't need to be manually destroyed either because the [Common Language Runtime](https://learn.microsoft.com/dotnet/standard/clr) provides *[automatic memory management](https://learn.microsoft.com/dotnet/standard/automatic-memory-management)* through a *[garbage collector](https://learn.microsoft.com/dotnet/standard/garbage-collection/)*, which checks for objects in the [managed heap](https://learn.microsoft.com/dotnet/standard/garbage-collection/fundamentals#the-managed-heap) that are no longer being used and performs the necessary operations to reclaim their memory. The garbage collector can be controlled, to some degree, through the [`System.GC`](https://learn.microsoft.com/dotnet/api/system.gc?view=net-10.0) class.

## C++/CLI

The runtime for .NET is the [Common Language Runtime](https://learn.microsoft.com/dotnet/standard/clr), which implements and extends the Common Language Infrastructure. The CLI is standardized as [ECMA-335](https://ecma-international.org/publications-and-standards/standards/ecma-335/) and [ISO/IEC 23271](https://www.iso.org/standard/58046.html).

The C# standard requires a certain subset of the features of the CLI. In accordance with the CLI [Common Type System](https://learn.microsoft.com/dotnet/standard/base-types/common-type-system), C# has two kinds of types: value types, which include structs, and reference types, which include classes. Therefore, in C# classes and structs are different. Classes have reference semantics, while structs have value semantics.

In C++ classes and structs are the same and whether an instance of a class shall have dynamic storage duration is decided when creating it.

Microsoft has developed extensions to the C++ programming language, including *Managed Extensions for C++* (or "Managed C++"), *[C++ Component Extensions](https://learn.microsoft.com/cpp/cppcx/visual-c-language-reference-c-cx)* (or "C++/CX"), C++/CLI and *[C++/WinRT](https://learn.microsoft.com/windows/apps/develop/cpp-winrt/)*.

[C++/CLI](https://learn.microsoft.com/cpp/dotnet/dotnet-programming-with-cpp-cli-visual-cpp) is a replacement for Managed C++ and is standardized as [ECMA-372](https://ecma-international.org/publications-and-standards/standards/ecma-372/), which is based on the C++ ISO/IEC standard. It is a variant of C++ modified for the CLI and extends the language with additional keywords, classes, exceptions, namespaces and library facilities, as well as with garbage collection.

C++/CLI code can be linked to from C#, meaning it can be used for writing *glue code* that bridges between C/C++ code and managed code. It allows crafting programs that use .NET classes as well as native C++ types.

A standard C++ class definition left unmodified in C++/CLI defines a *native class*. The `class` and `struct` keywords are equivalent, except for default accessibility.

C++/CLI augments C++ with *[managed types](https://learn.microsoft.com/cpp/dotnet/managed-types-cpp-cli)*. These include ref classes and value classes.

A *[ref class](https://learn.microsoft.com/cpp/extensions/classes-and-structs-cpp-component-extensions)* is a class defined with the class key `ref class` or `ref struct`, which differ only in default accessibility of members. Ref classes inherit from exactly one direct base class, which is [`System::Object`](https://learn.microsoft.com/dotnet/api/system.object) by default.

It must be noted that `ref struct` has widely different meanings in C# and in C++/CLI: in C# it's used to declare a struct which can only ever be instanced on the execution stack, while in C++/CLI it is used to declare a ref class, which is always physically allocated on the heap.

A *[value class](https://learn.microsoft.com/cpp/cppcx/value-classes-and-structs-c-cx)* is a class defined with the class key `value class` or `value struct`, which differ only in default accessibility of members. The one and only direct base class of all value classes is [`System::ValueType`](https://learn.microsoft.com/dotnet/api/system.valuetype), which, in turn, inherits from `System::Object`. Value classes cannot be inherited from.

A *simple value class* is a value class that has no members that need to be tracked by the garbage collector. Native classes cannot have members of managed types except for simple value class types, which are allowed.

C++/CLI has a *unified type system* and `System::Object` is the ultimate base type of all value and handle types.

Dynamic allocation in C++/CLI uses the *native heap* and the *CLI heap*. As in C++, objects on the native heap cannot move. However, the garbage collector may move objects that reside on the CLI heap. Native pointers and references are not sufficient for dealing with them, as tracking is required. For this purpose, C++/CLI defines *[handles](https://learn.microsoft.com/cpp/extensions/handle-to-object-operator-hat-cpp-component-extensions)* (with the `T^` syntax) and *[tracking references](https://learn.microsoft.com/cpp/extensions/tracking-reference-operator-cpp-component-extensions)* (with the `T%` syntax).

The relationship between the `%` punctuator and the `^` punctuator is the same as that between the `&` punctuator and the `*` punctuator.

To deal with the garbage collector moving objects in memory, C++/CLI features *[interior pointers](https://learn.microsoft.com/cpp/extensions/interior-ptr-cpp-cli)* and, among them, *[pinning pointers](https://learn.microsoft.com/cpp/extensions/pin-ptr-cpp-cli)*.

The `new` operator is used to allocate memory on the native heap. Its result, as in C++, is a pointer. It cannot be used for CLI classes other than simple value classes.

The [`gcnew`](https://learn.microsoft.com/cpp/extensions/ref-new-gcnew-cpp-component-extensions) operator is used to allocate memory on the CLI heap. Its result is a handle. It cannot be used for native types.

The `delete` keyword can be used on a pointer, as in C++, as well as on a CLI handle.

The [`nullptr`](https://learn.microsoft.com/cpp/extensions/nullptr-cpp-component-extensions) literal is the *null value constant* and has the *null type*. It can be implicitly converted to a null pointer or null handle of any type.

*[Boxing](https://learn.microsoft.com/cpp/dotnet/boxing-cpp-cli)* is the conversion from a value type `T` (excluding pointers) to type `T^` and involves creating a bitwise copy of the instance onto a newly allocated *box* on the CLI heap.

Native classes are described in metadata as value classes, even though they technically aren't, and are, therefore, seen as structs in C# code.

C++/CLI is old. It is still supported for compatibility purposes and no novel features are planned. Furthermore, it is implemented by Microsoft only for Windows. It is possible to use pointers in C# directly and to call native code from C#.

C# provides support for unverifiable code using pointers and function pointers in [unsafe contexts](https://learn.microsoft.com/dotnet/csharp/language-reference/unsafe-code). These are introduced through the [`unsafe`](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/unsafe) keyword, which requires the [`AllowUnsafeBlocks`](https://learn.microsoft.com/dotnet/csharp/language-reference/compiler-options/language#allowunsafeblocks) compiler option.

For when calling native code is needed, [native interoperability](https://learn.microsoft.com/en-us/dotnet/standard/native-interop/) is supported in .NET. CLI code can call methods defined in native code through *[platform invoke](https://learn.microsoft.com/en-us/dotnet/standard/native-interop/pinvoke)* (or "PInvoke", or "p/invoke"). Library paths are [resolved](https://learn.microsoft.com/en-us/dotnet/standard/native-interop/native-library-loading) automatically to adjust, for example, for different extensions on different platforms.

For new projects, Microsoft recommends exploring alternatives to C++/CLI such as [ClangSharp](https://github.com/dotnet/ClangSharp) or [SWIG](https://www.swig.org/tutorial.html).

Despite the reasons to avoid actually using C++/CLI, I included it for its educational value.

When using C, it's relatively simple to imagine what might be happening at a lower level, given one's code. Things are usually much more complex, especially on modern architectures and with modern compilers, but one can still have a mental model of how things would work on a simplified architecture.

What C++ adds to C is mostly syntactic sugar. When using C++, it's usually relatively simple to imagine what equivalent C code would look like and, therefore, map the abstractions of C++ to, at least, a simplified understanding of the low level.

With higher languages like C#, what is actually going on is more mysterious. Learning C++/CLI provides valuable insights into how C# works under the hood, helping to demystify it.

## D

The [D](https://dlang.org/) programming language, originally developed by [Digital Mars](https://www.digitalmars.com/) and now under the wing of the [D Language Foundation](https://dlang.org/foundation/), has a public [specification](https://dlang.org/spec/spec.html).

In D, as in C#, classes are reference types, while structs are value types.

D [classes](https://dlang.org/spec/class.html) are similar to C# classes. Class objects are instantiated by reference only, through the `new` keyword. All D classes have exactly one direct base class, except for [`object.Object`](https://dlang.org/library/object/object.html), which all other classes inherit from, making it the root of the class object hierarchy.

D [structs](https://dlang.org/spec/struct.html) do not support inheritance (although the *[AliasThis](https://dlang.org/spec/struct.html#alias-this)* declaration achieves something similar). They are otherwise similar to C++ classes. Their uses include [plain old data](https://dlang.org/spec/struct.html#POD). As in C++, struct objects can be created through the `T(arg1, arg2, ...)` syntax, which evaluates to the actual instance itself, or allocated dynamically through a new expression.

The `new` keyword has, in D, a similar meaning as in C++. [New expressions](https://dlang.org/spec/expression.html#new_expressions) are used to allocate objects dynamically and initialize them. They evaluate to a reference (for class types, as in C#) or a pointer (for struct types) to the newly created object.

The [`null`](https://dlang.org/spec/expression.html#null) literal denotes a value, of the singular type `typeof(null)`, which casts to a null pointer, a null class object reference or the null value for certain other types.

The [`std.typecons.Nullable`](https://dlang.org/library/std/typecons/nullable.html) struct template serves a similar purpose as `System.Nullable<T>` in C#. It does so by storing a boolean value and a value of the underlying type, exposed as the `isNull` and `get` properties. A very similar goal is achieved through the [`std.typecons.NullableRef`](https://dlang.org/library/std/typecons/nullable_ref.html) struct, which wraps a (possibly null) pointer to the data of interest.

D provides automatic [memory management](https://wiki.dlang.org/Memory_Management) through [garbage collection](https://dlang.org/spec/garbage.html). However, the language allows for manual memory management too and the garbage collector, while on by default, can even be disabled altogether.

D allows [interfacing to C](https://dlang.org/spec/interfaceToC.html) and, to some extent, to [C++](https://dlang.org/spec/cpp_interface.html). C functions can be called directly from D code. It's possible to produce one single binary from a project containing both D and C files.

Memory allocated through the automatic memory manager, using new expressions as seen above or [`core.memory.GC.malloc`](https://dlang.org/library/core/memory/gc.malloc.html), is managed by by the garbage collector. Conversely, memory dynamically allocated in C code or in D through [`core.stdc.stdlib.malloc`](https://dlang.org/library/core/stdc/stdlib/malloc.html) is not and can be freed manually using [`core.stdc.stdlib.free`](https://dlang.org/library/core/stdc/stdlib/free.html).

Interfacing D with foreign code requires [special care](https://dlang.org/spec/garbage.html#gc_foreign_obj) to [make sure](https://dlang.org/spec/interfaceToC.html#storage_allocation) that everything works properly and memory is not collected before the foreign function is done with it.

The presence of both managed and unmanaged dynamically allocated memory in D is similar to that in C++/CLI, but there are important differences. One of them is that D uses a non-moving garbage collector. Pointers, therefore, do not require tracking.

Many components of the D standard library, as well as basic features of the language, require garbage collection. However, avoiding them is possible, while somewhat cumbersome. The [`std.container.array`](https://dlang.org/library/std/container/array.html) module provides the [`Array`](https://dlang.org/library/std/container/array/array.html) struct, an array type with deterministic control of memory that requires no automatic garbage collection.

## Comparison

The differences between structs and classes in C++, C#, C++/CLI and D can be shortly summarized as follows:

- In C++ classes and structs are the same. Any given instance can be created with dynamic memory allocation or not, as the user wishes.
- In C# classes are reference types and their instances receive dynamic memory allocation, while structs are value types and their instances do not.
- In C++/CLI a ref class (or "ref struct") is the same as a C# class, while a value class (or "value struct") is the same as a C# struct.
- In D classes are reference types and their instances receive dynamic memory allocation, while structs are value types and, as in C++, can be instanced with dynamic memory allocation or not.

There is much that I left out from this post for the sake of conciseness. As a result, this post is just a brief overview, simpler than the reality of this matter. There are exceptions and corner cases that are interesting and important, but not functional to the basic and general understanding I seek to provide here. Among topics I didn't include there are, for example, *placement new* expressions, which allow using already allocated memory for an instance of an object.

Concepts of "struct" and "class" also exist in programming languages I haven't considered. To mention a few examples:

- [Java](https://docs.oracle.com/javase/specs/jls/se26/html/jls-8.html) and [JavaScript](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Classes) both have classes but don't have structs.
- Go has [structs](https://go.dev/ref/spec#Struct_types), but doesn't have classes.
- Python has [classes](https://docs.python.org/tutorial/classes.html). It also has a [`struct`](https://docs.python.org/3/library/struct.html#struct.Struct) module to convert between Python values and C structs represented as Python [`bytes`](https://docs.python.org/3/library/stdtypes.html#bytes) objects.

## Stack vs. heap

Terminology around different programming languages is erratic: the same idea can go by different names and the same name can be used for different ideas. My use of the phrase "dynamic allocation" is an attempt to address this.

Writing this post, I struggled to find an adequate wording for describing, on one hand, the instantiation, through the `new` keyword, of classes in C#, as well as classes and structs in C++ and D, and, on the other, that of classes and structs in C++ without `new`, of structs in D without `new` and of structs in C# with it. In the former case, which I loosely referred to as "dynamic allocation", the expression evaluates to a pointer to newly allocated memory that stores an object that can outlive the current context, or a reference to such an object. In the latter, the expression evaluates to the (temporary) object itself.

It is common to contrast the two situations I described as values being created on the heap, in one case, and on the stack, in the other. In actuality, however, this is not required and it can be [argued](https://ericlippert.com/2009/04/27/the-stack-is-an-implementation-detail-part-one/) that it is just an implementation detail.

The core aspect of value types is that they are copied by value. The core aspect of reference types is that they are copied by reference.

The D and C++/CLI specifications do largely leverage the heap-vs.-stack dichotomy in the customary way, but those of C# and C++ do not. Even for D and C++/CLI, a compliant implementation that doesn't actually rely on different memory areas for different kinds of allocation, but does guarantee the specified behavior for programs, is possible. Where data is actually stored is unlikely to be a concern for the programmer.

In C++/CLI *[stack semantics](https://learn.microsoft.com/cpp/dotnet/cpp-stack-semantics-for-reference-types)* blurs the line between different kinds of allocation by allowing the creation of instances of ref classes using the same syntax that one would use to create an instance of a native type on the stack, without using `gcnew`, even though the documentation states that ref class objects are always stored on the heap. This truly is a detail of little practical reference: whether stack semantics is just syntax sugar, as the C++/CLI documentation implies, or ref class instances actually reside on the execution stack won't affect the behaviour of the program.

For educational purposes, I actually find it useful to treat a specific possible implementation as if it were the ground truth. Doing so remains a useful tool later on. This post, however, wouldn't be accurate if it gave the impression the stack and heap are necessarily used as commonly described in all possible implementations of all languages under consideration.

## Further resources

- *[Get Started!](https://isocpp.org/get-started)* by the Standard C++ Foundation
- *[Introduction to .NET](https://learn.microsoft.com/dotnet/core/introduction)* by Microsoft
- *[A tour of the C# language](https://learn.microsoft.com/dotnet/csharp/tour-of-csharp/overview)* by Microsoft
- *[Choosing Between Class and Struct](https://learn.microsoft.com/dotnet/standard/design-guidelines/choosing-between-class-and-struct)* by Microsoft
- *[Overview](https://dlang.org/overview.html)* on the D website
- *[Welcome to D](https://tour.dlang.org/)*
- *[Introduction](https://dlang.org/spec/intro.html)* in the D Language Reference
- *[Programming in D for CSharp Programmers](https://wiki.dlang.org/Programming_in_D_for_CSharp_Programmers)* in the D Wiki
- *[Don't Fear the Reaper](https://blog.dlang.org/archive/2017/03/20/dont-fear-the-reaper/)* on the D Blog
- *[Life in the Fast Lane](https://blog.dlang.org/archive/2017/03/20/dont-fear-the-reaper/)* on the D Blog
- *[Go Your Own Way (Part One: The Stack)](https://blog.dlang.org/archive/2017/07/07/go-your-own-way-part-one-the-stack/)* on the D Blog
- *[Go Your Own Way (Part Two: The Heap)](https://blog.dlang.org/archive/2017/09/25/go-your-own-way-part-two-the-heap/)* on the D Blog
- *[The Stack Is An Implementation Detail](https://ericlippert.com/2009/04/27/the-stack-is-an-implementation-detail-part-one/)* by Eric Lippert
- *[The Truth About Value Types](https://ericlippert.com/2010/09/30/the-truth-about-value-types/)* by Eric Lippert
