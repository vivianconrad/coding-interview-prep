// Implement a custom smart pointer class in C++ that behaves like a unique pointer. Your class should have the following features:
// The pointer should automatically delete the object it's pointing to when it goes out of scope.
// The pointer should support move semantics.
// The pointer should support pointer-like behavior, such as dereferencing and member access.
  
 
template <typename T>
class UniquePointer {
public:
    UniquePointer(T* ptr = nullptr) : ptr_(ptr) {}
    ~UniquePointer() {
        delete ptr_;
    }
    UniquePointer(UniquePointer&& other) {
        ptr_ = other.ptr_;
        other.ptr_ = nullptr;
    }
    UniquePointer& operator=(UniquePointer&& other) {
        if (this != &other) {
            delete ptr_;
            ptr_ = other.ptr_;
            other.ptr_ = nullptr;
        }
        return *this;
    }
    T& operator*() const {
        return *ptr_;
    }
    T* operator->() const {
        return ptr_;
    }
    T* release() {
        T* temp = ptr_;
        ptr_ = nullptr;
        return temp;
    }
private:
    T* ptr_;
};
