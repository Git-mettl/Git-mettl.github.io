// 1. Read the folder parameter from the URL address bar (e.g., ?folder=folder1)
const urlParams = new URLSearchParams(window.location.search);
const targetFolder = urlParams.get('folder');

// Load the JSON index file
fetch('gallery-data.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('galleryContainer');

        // Main masonry grid container configuration
        const masonryGrid = document.createElement('div');
        masonryGrid.className = "columns-1 md:columns-2 lg:columns-2 gap-12 space-y-20";
        container.appendChild(masonryGrid);

        // 2. Filter data array to include ONLY the folder requested in the URL
        const filteredData = data.filter(folderGroup => folderGroup.folder === targetFolder);

        // If someone goes directly to gallery.html without a valid folder link
        if (filteredData.length === 0) {
            container.innerHTML = `<h2 class="text-[24px] uppercase font-spartan-light tracking-widest text-center mt-20 text-secondary">No collection specified or folder not found.</h2>`;
            return;
        }

        // Loop through the filtered folder group data
        filteredData.forEach(folderGroup => {
            
            // Loop through and display ALL images inside just this specific folder
            folderGroup.images.forEach(imgData => {
                const article = document.createElement('article');
                article.className = "break-inside-avoid mb-20 group cursor-pointer block";

                // Image Wrapper
                const imgWrapper = document.createElement('div');
                imgWrapper.className = "overflow-hidden bg-white mb-6 h-auto relative";

                const img = document.createElement('img');
                img.src = `images/${folderGroup.folder}/${imgData.src}`;
                img.alt = imgData.caption;
                img.className = "w-full h-auto object-contain transition-all duration-700 group-hover:scale-105";

                // HOVER OVERLAY TEXT (Pulls 'hover-caption')
                const overlayText = document.createElement('div');
                overlayText.className = "absolute inset-0 bg-black/50 text-white flex items-center justify-center p-8 text-center text-[20px] font-spartan-light uppercase tracking-widest opacity-0 transition-opacity duration-500 group-hover:opacity-100";
                overlayText.textContent = imgData['hover-caption'] || "View Project"; 

                imgWrapper.appendChild(img);
                // imgWrapper.appendChild(overlayText); 

                // Bottom Header Typography Wrapper
                const header = document.createElement('header');
                header.className = "flex justify-between items-start";

                const textDiv = document.createElement('div');

                const h4 = document.createElement('h4');
                h4.className = "text-[22px] text-primary mb-1 uppercase font-spartan-light";
                h4.textContent = folderGroup.caption; 

                const p = document.createElement('p');
                p.className = "text-[13px] text-secondary uppercase tracking-widest";
                p.textContent = `Location • ${folderGroup.location}`;

                textDiv.appendChild(h4);
                textDiv.appendChild(p);
                header.appendChild(textDiv);
                
                article.appendChild(imgWrapper);
                article.appendChild(header);
                
                masonryGrid.appendChild(article);
            });
        });
    })
    .catch(err => console.error("Error loading gallery data:", err));