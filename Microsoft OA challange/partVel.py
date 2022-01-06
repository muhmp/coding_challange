def particleVelocity(particles):
    numStable = 0
    if len(particles) < 3:
        return 0
    for i in range(len(particles) - 2):
        for j in range(i + 1, len(particles) - 1):
            if particles[j + 1] - particles[j] == particles[i + 1] - particles[i]:
                numStable += 1
            else:
                break
            print(particleVelocity)
    return numStable if numStable < 1000000000 else -1
