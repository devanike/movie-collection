# Movie Collection Web App

## Team Members
- Grace Olabode - Repository Owner
- Emmanuel Dania - Collaborator

## Project Description
A web application to display and filter a collection of movies.

## Setup Instructions
To run this project locally:

1.  **Clone the repository:**
    ```
    git clone https://github.com/devanike/movie-collection.git
    ```
2.  **Navigate to the project directory:**
    ```
    cd movie-collection
    ```
3.  **Launch the App:**
    Open the `index.html` file in your preferred web browser (or use VS Code Live Server).

## CLI Commands Used
```
	mkdir movie-collection   			# Create main folder
	cd movie-collection      			# Enter folder
	git init                 			# Initialize Git
	mkdir css js assets images  		# Create folders
	mkdir js/data               		# Create nested folder
	touch index.html            		# Create HTML file
	touch css/style.css         		# Create CSS file
	touch js/app.js             		# Create JS file
	touch js/data/movies.json   		# Create JSON data file
	git add .                           # Stage changes
	git commit -m "Message"             # Commit changes
	git branch -M main                  # Rename branch
	git remote add origin [URL]         # Link to GitHub
	git push -u origin main             # Push to remote
	git checkout -b [branch-name]       # Create new branch
	git fetch                           # Get updates from remote
	git pull origin development         # Pull latest code
```

## Git Workflow Steps
We followed the Feature Branch Workflow to ensure code quality and prevent conflicts:

1. **Main Branch**: The `main` branch holds the initial structure.
2. **Development Branch**: The `development` branch serves as the main integration branch.
3. **Feature Branches**:
   * `feature/html-structure`: Used to implement the HTML skeleton.
   * `feature/css-styling`: Used to implement CSS styling and responsive design.
   * `feature/movie-data`: Used to create the movies.json dataset.
   * `feature/movie-rendering`: Used to implement the JavaScript fetch logic and rendering.
   * `feature/filter-functionality`: Used to implement the genre filtering functionality.
4. **Pull Requests**: Features were merged into `development` using Pull Requests after review.

## Feature List and Implementation Details

### 1. HTML Structure
- Semantic HTML with header and main sections
- Filter buttons with data attributes for genre selection
- Empty movie grid container populated by JavaScript

### 2. CSS Styling
- CSS Grid layout with responsive design
- Hover effects and transitions on movie cards
- Active state styling for filter buttons
- Media queries for mobile (480px) and tablet (768px)

### 3. Movie Data (JSON)
- Structured JSON file with 9 movies across 3 genres
- Each movie includes: id, title, year, genre, description,, trailer link and  poster URL

### 4. Movie Rendering (JavaScript)
- Fetch to load movies from JSON file
- DOM manipulation to create and display movie cards
- Error handling for failed data loading
- Dynamic content generation

### 5. Filter Functionality (JavaScript)
- Event listeners on filter buttons
- Array filtering by selected genre
- Active button state management
- Real-time movie display updates

### 6. Video Trailer (Javascript and Youtube Embed)
- Event listeners on cards
- Modal popups
- Video trailers play from youtube embed

## Team Contributions

### Grace Olabode (Repository Owner):
* Initialized the repository and directory structure
* Implemented `index.html` structure with header and filter buttons
* Created `style.css` for grid layout, styling, and responsive design
* Created `movies.json` dataset with 9 movies across 3 genres
* Reviewed and approved pull requests from collaborator

### Emmanuel Dania (Collaborator):
* Set up the `development` branch
* Implemented `app.js` to fetch data from JSON file
* Created the DOM manipulation logic to render movie cards dynamically
* Implemented the genre filtering functionality
* Implemented the trailer playing functionality
* Reviewed and approved pull requests from repository owner

## Lessons Learned

### Branch Management
We learned the importance of creating separate branches for specific features to avoid overwriting each other's work. Each feature was developed in isolation, tested, and then merged through pull requests.

### Merge Conflicts
We learned to communicate before merging to ensure the `development` branch remained stable. Regular updates and pulling the latest changes helped minimize conflicts.

### Code Review Process
Reviewing each other's code helped us catch potential bugs early and learn different approaches to solving problems. It also improved our code quality and understanding.

### Collaboration Skills
Working remotely on the same project taught us the importance of clear communication, descriptive commit messages, and proper documentation.

### Git Workflow Understanding
We gained practical experience with the Feature Branch Workflow, understanding how professional development teams collaborate on large projects while maintaining code stability.


## Screenshots of CLI
### Emmanuel Screenshots

![Screenshot 1](./Screenshots/Screenshot%201%20-%20Emmanuel.png)
![Screenshot 2](./Screenshots/Screenshot%202%20-%20Emmanuel.png)
![Screenshot 3](./Screenshots/Screenshot%203%20-%20Emmanuel.png)
![Screenshot 4](./Screenshots/Screenshot%204%20-%20Emmanuel.png)

### Grace Screenshots

![Screenshot 1](./Screenshots/Screenshot%201%20-%20Grace.png)
![Screenshot 2](./Screenshots/Screenshot%202%20-%20Grace.png)
![Screenshot 3](./Screenshots/Screenshot%203%20-%20Grace.png)
![Screenshot 4](./Screenshots/Screenshot%204%20-%20Grace.png)
![Screenshot 5](./Screenshots/Screenshot%205%20-%20Grace.png)

### Pull Request History
![Pull Request History](./Screenshots/Pul%20Requests.png)
