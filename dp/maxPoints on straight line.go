package main

import "strconv"

// Function maxPoints calculates the maximum number of points that lie on the same line given a set of points.
// Parameters:
//
//	points: A 2D slice of integers representing the coordinates of points in the format [[x1, y1], [x2, y2], ...].
//
// Returns:
//
//	An integer representing the maximum number of points that lie on the same line.
func maxPoints(points [][]int) int {
	n := len(points)
	// If the number of points is less than 3, return the number of points.
	if n < 3 {
		return n
	}
	// Initialize the maximum number of points on the same line.
	maxPoints := 0
	// Loop through each point.
	for i := 0; i < n; i++ {
		// If the maximum points achievable is less than the remaining points to be processed or
		// if it's already greater than half the total points, break the loop.
		// if maxPoints >= n-i || maxPoints > n/2 {
		//     break
		// }
		// Map to store the count of points with the same slope.
		slopeCount := map[string]int{}
		// Iterate through the remaining points to calculate slopes.
		for j := i + 1; j < n; j++ {
			// Calculate the differences in x and y coordinates.
			x, y := points[i][0]-points[j][0], points[i][1]-points[j][1]
			// If the slope is vertical, set x to 1 to avoid division by zero.
			if x == 0 {
				y = 1
			} else if y == 0 { // If the slope is horizontal, set y to 1 to avoid division by zero.
				x = 1
			} else { // Calculate the slope's reduced form.
				if y < 0 {
					x, y = -x, -y
				}
				gcdXY := gcd(abs(x), abs(y)) // Calculate the greatest common divisor of x and y.
				x /= gcdXY
				y /= gcdXY
			}
			// Increment the count for the current slope.
			slopeCount[strconv.Itoa(x)+"/"+strconv.Itoa(y)]++
		}
		// Update the maximum points with the maximum count of points with the same slope plus 1 (including the current point).
		for _, count := range slopeCount {
			maxPoints = max(maxPoints, count+1)
		}
	}
	// Return the maximum number of points on the same line.
	return maxPoints
}

// Function abs returns the absolute value of a given integer.
func abs(x int) int {
	if x < 0 {
		return -x
	}
	return x
}

// Function gcd calculates the greatest common divisor of two integers.
func gcd(a, b int) int {
	for b != 0 {
		a, b = b, a%b
	}
	return a
}
