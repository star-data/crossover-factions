function calculateDroidSpeed( enginePower, weight, propulsionType, bodySize) {
    /**
     * Calculates the final speed of a droid based on its attributes.
     */
        // Base speed calculation with power-to-weight ratio
    let speed = ( enginePower / Math.max(1, weight))

    // Apply VTOL speed reductions
    if (propulsionType === "VTOL") {
        if (bodySize === "HEAVY") {
            speed *= 0.25;  // Reduce by 75%
        } else if (bodySize === "MEDIUM") {
            speed *= 0.75;  // Reduce by 25%
        }
    }

    // Apply engine output bonus (if engine power is greater than weight)
    if (enginePower > weight) {
        speed *= 1.5;  // 50% speed boost
    }

    return speed;
}

const speedPythonWheels = calculateDroidSpeed( 20000 * 0.8, 2700 + 300 + 20000);
console.log(`Python with Wheels Speed: ${speedPythonWheels.toFixed(2)}`);

const speedViperTracks = calculateDroidSpeed( 5000* 0.8, 600 + 650 + 200);
console.log(`Viper with Tracks Speed: ${speedViperTracks.toFixed(2)}`);
