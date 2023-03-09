# Dijkstra's Algorithm
import heapq

def dijkstra(graph, start):
    # Initialize distances with infinite values
    distances = {node: float('inf') for node in graph}
    distances[start] = 0

    # Initialize the priority queue with the start node
    pq = [(0, start)]

    # Loop until the priority queue is empty
    while pq:
        # Get the node with the smallest distance
        current_dist, current_node = heapq.heappop(pq)

        # Skip nodes that have already been processed
        if current_dist > distances[current_node]:
            continue

        # Loop through the neighbors of the current node
        for neighbor, weight in graph[current_node].items():
            # Calculate the distance to the neighbor through the current node
            distance = current_dist + weight

            # Update the distance if it's shorter than the current distance
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(pq, (distance, neighbor))

    return distances
