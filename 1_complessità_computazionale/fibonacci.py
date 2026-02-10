from time import time
import math
import numpy as np


def recursiveFib(n):
    if n <= 2:
        return 1
    return recursiveFib(n - 1) + recursiveFib(n - 2)


def iterativeFib(n):
    L = [0, 1, 1]
    for i in range(3, n + 1):
        L.append(L[i - 1] + L[i - 2])
    return L[-1]


def pow_fib(M, n):
    if not n:
        return 0
    elif n > 1:
        if n % 2 == 0:  # if n is even, then we just apply the function again using N/2, because after that recursive call ends, we will multiplicate the matrix by itself
            A = pow_fib(M, n / 2)
            M = np.dot(A, A)
        else:  # in this case we lower n by 1 such that we get an even number, and then we do the same as before, but adding a product to the base matrix
            A = pow_fib(M, (n - 1) / 2)
            M = np.dot(np.dot(A, A), M)
    return M


def matrixFib(n):
    M = np.array([[1., 1.], [1., 0.]])
    A = pow_fib(M, n - 1)
    return A[0, 0]


if __name__ == '__main__':

    n = 50

    while True:

        print("SCELTA ALGORITMI: ")
        print("1) Matrix \n")
        print("2) Iterative \n")
        print("3) Recursive \n")
        print("0) EXIT.")
        choice = int(input())

        if choice == 1:
            t0 = time()
            print("Matrix F(6): ", matrixFib(n))
            t1 = time()
            print("Tempo impiegato: ", (t1 - t0) * 1000, "\n")
            continue

        if choice == 2:
            t0 = time()
            print("Iterative F(6): ", iterativeFib(n))
            t1 = time()
            print("Tempo impiegato: ", (t1 - t0) * 1000, "\n")
            continue

        if choice == 3:
            t0 = time()
            print("Recursive F(6): ", recursiveFib(n))
            t1 = time()
            print("Tempo impiegato: ", (t1 - t0) * 1000, "\n")
            continue

        if choice == 0:
            break
