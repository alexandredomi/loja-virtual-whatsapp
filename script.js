// ==================== CONFIGURAÇÕES ==================== 
        // Número do WhatsApp da empresa (inclua +55 e DDD)
        const WHATSAPP_NUMBER = '5553991656605'; // Altere para seu número

        // Dados de produtos (simular dados do WordPress ACF)
        // Em produção, esses dados viriam de uma API WordPress
        const PRODUCTS = [
            {
                id: 1,
                name: 'iPhone 17 Pro Max 256GB Prateado',
                price: 11249.90,
                category: 'Iphones',
                description: 'iPhone 17 Pro Max 256GB Prateado. Tela brilhante de 6,3 polegadas*, estrutura unibody em alumínio, chip A19 Pro, câmeras traseiras de 48MP e duração de bateria avançada. Avisos legais *A tela tem bordas arredondadas que se ajustam ao design curvo do aparelho dentro da sua forma retangular. Quando medida como um retângulo, a tela tem 6,27 polegadas (iPhone 17, iPhone 17 Pro), 6,55 polegadas (iPhone Air) ou 6,86 polegadas (iPhone 17 Pro Max) na diagonal. A área real de visualização é menor. **Em comparação com a parte de trás em vidro da geração anterior do iPhone. ***Em comparação com o iPhone da geração anterior. ****Todas as informações sobre a bateria dependem da configuração da rede e de vários outros fatores. Os resultados reais podem variar. A bateria tem um número limitado de ciclos de recarga e, se necessário, deverá ser substituída. A vida útil e a duração da bateria variam de acordo com o uso e a configuração. Consulte apple.com/br/batteries e apple.com/br/iphone/battery.html para obter mais informações. *****Testes conduzidos pela Apple em julho de 2025 usando unidades em pré-produção do iPhone 17, iPhone Air, iPhone 17 Pro e iPhone 17 Pro Max com software em versão preliminar, cabo para recarga com conector USB-C e adaptador dinâmico de 40W da Apple com potência máxima de 60W (modelo A3351) e carregadores MagSafe da Apple (modelo A3502 de 1 metro e modelo A3503 de 2 metros) com adaptador de energia USB-C de 30W da Apple (modelo A2164) ou adaptador dinâmico de 40W da Apple com potência máxima de 60W (modelo A3351). Os testes de recarga rápida foram conduzidos com unidades descarregadas de iPhone. O tempo foi calculado do momento em que o logo da Apple aparece até o aparelho iniciar. O tempo de recarga varia de acordo com a o adaptador, os ajustes, o uso e fatores ambientais. Os resultados reais podem variar. ******Alguns recursos podem não estar disponíveis em todos os países ou regiões. *******A Apple Intelligence está disponível em versão beta. Alguns recursos podem não estar disponíveis em todas as regiões ou idiomas. Para ver a disponibilidade de recursos e idiomas, e os requisitos do sistema, acesse support.apple.com/pt-br/121115. ********O iPhone 17, o iPhone 17 Pro e o iPhone Air são capazes de identificar um acidente grave de carro e ligar para os serviços de emergência. Requer uma conexão de rede celular ou chamadas Wi-Fi.',
                image: 'img/iphone17promax.webp',
                images: [
                    'img/iphone17promax1.webp',
                    'img/iphone17promax2.webp',
                    'img/iphone17promax3.webp'
                ]
            },
            {
                id: 2,
                name: 'PlayStation 5 Slim Digital 825 GB',
                price: 3390.90,
                category: 'Consoles',
                description: 'Prepare-se para uma revolução em sua forma de jogar com o Sony PS5 Edição Digital. Equipado com um poderoso armazenamento SSD de 825GB, o console oferece tempos de carregamento ultrarrápidos, eliminando esperas e mantendo você na ação. Acompanhado do controle sem fio DualSense, sinta cada detalhe dos seus jogos através da resposta tátil imersiva e dos gatilhos adaptáveis dinâmicos, que simulam a tensão e o impacto de cada movimento. Com um design elegante em branco, o PS5 não é apenas um console, mas o centro da sua diversão. A jornada pela nova geração de entretenimento começa aqui. INFORMAÇÃO IMPORTANTE SOBRE ARMAZENAMENTO:Espaço Total do SSD: 825 GB.Espaço Livre Disponível para Jogos: Aproximadamente 667 GB (parte da memória é reservada para o sistema operacional garantir a ultra velocidade).Atenção: Este modelo NÃO é a versão "Slim" de 1TB.',
                image: 'img/ps51.webp',
                images: [
                    'img/ps51.webp',
                    'img/ps52.webp',
                ]
            },
            {
                id: 3,
                name: 'Produto Expert 3',
                price: 199.90,
                category: 'Categoria A',
                description: 'Descrição do produto 3',
                image: 'https://via.placeholder.com/300x250/dc3545/ffffff?text=Produto+3',
                images: [
                    'https://via.placeholder.com/600x400/dc3545/ffffff?text=Produto+3+Foto+1',
                    'https://via.placeholder.com/600x400/b91c1c/ffffff?text=Produto+3+Foto+2'
                ]
            },
            {
                id: 4,
                name: 'Produto Standard 4',
                price: 79.90,
                category: 'Categoria C',
                description: 'Descrição do produto 4',
                image: 'https://via.placeholder.com/300x250/ffc107/ffffff?text=Produto+4',
                images: [
                    'https://via.placeholder.com/600x400/ffc107/ffffff?text=Produto+4+Foto+1',
                    'https://via.placeholder.com/600x400/f59e0b/ffffff?text=Produto+4+Foto+2'
                ]
            },
            {
                id: 5,
                name: 'Produto Plus 5',
                price: 129.90,
                category: 'Categoria B',
                description: 'Descrição do produto 5',
                image: 'https://via.placeholder.com/300x250/17a2b8/ffffff?text=Produto+5',
                images: [
                    'https://via.placeholder.com/600x400/17a2b8/ffffff?text=Produto+5+Foto+1',
                    'https://via.placeholder.com/600x400/0ea5e9/ffffff?text=Produto+5+Foto+2'
                ]
            },
            {
                id: 6,
                name: 'Produto Max 6',
                price: 249.90,
                category: 'Categoria C',
                description: 'Descrição do produto 6',
                image: 'https://via.placeholder.com/300x250/6f42c1/ffffff?text=Produto+6',
                images: [
                    'https://via.placeholder.com/600x400/6f42c1/ffffff?text=Produto+6+Foto+1',
                    'https://via.placeholder.com/600x400/7c3aed/ffffff?text=Produto+6+Foto+2'
                ]
            }
        ];

        // ==================== ESTADO DO CARRINHO ==================== 
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // ==================== ELEMENTOS DOM ==================== 
        const productsGrid = document.getElementById('productsGrid');
        const searchInput = document.getElementById('searchInput');
        const categoryFilter = document.getElementById('categoryFilter');
        const resetFilters = document.getElementById('resetFilters');
        const cartIcon = document.getElementById('cartIcon');
        const cartCount = document.getElementById('cartCount');
        const cartModal = document.getElementById('cartModal');
        const closeCartModal = document.getElementById('closeCartModal');
        const cartItems = document.getElementById('cartItems');
        const cartSummary = document.getElementById('cartSummary');
        const checkoutForm = document.getElementById('checkoutForm');
        const checkoutButton = document.getElementById('checkoutButton');
        const emptyMessage = document.getElementById('emptyMessage');
        const finalizeCheckout = document.getElementById('finalizeCheckout');
        const backToCart = document.getElementById('backToCart');
        // elementos de pagamento
        const paymentMethodInputs = document.getElementsByName('paymentMethod');
        const cashOptions = document.getElementById('cashOptions');
        const cashChangeInputs = document.getElementsByName('cashChangeNeeded');
        const cashAmountWrapper = document.getElementById('cashAmountWrapper');
        const cashChangeAmountInput = document.getElementById('cashChangeAmount');
        // price filter numeric inputs
        const minPriceInput = document.getElementById('minPrice');
        const maxPriceInput = document.getElementById('maxPrice');

        // ==================== INICIALIZAÇÃO ==================== 
        document.addEventListener('DOMContentLoaded', function() {
            initializeApp();
        });

        function initializeApp() {
            // Preencher categorias
            populateCategories();
            
            // Renderizar produtos iniciais
            renderProducts(PRODUCTS);
            
            // Atualizar contador do carrinho
            updateCartCount();
            
            // Event listeners
            setupEventListeners();
            if (minPriceInput) minPriceInput.addEventListener('input', filterProducts);
            if (maxPriceInput) maxPriceInput.addEventListener('input', filterProducts);
        }

        // ==================== POPULAÇÃO DE CATEGORIAS ==================== 
        function populateCategories() {
            const categories = [...new Set(PRODUCTS.map(p => p.category))];
            const categorySelect = document.getElementById('categoryFilter');
            
            categories.forEach(category => {
                const option = document.createElement('option');
                option.value = category;
                option.textContent = category;
                categorySelect.appendChild(option);
            });
        }

        // ==================== RENDERIZAÇÃO DE PRODUTOS ==================== 
        function renderProducts(products) {
            productsGrid.innerHTML = '';

            if (products.length === 0) {
                emptyMessage.style.display = 'block';
                return;
            }

            emptyMessage.style.display = 'none';

            products.forEach(product => {
                const productCard = createProductCard(product);
                productsGrid.appendChild(productCard);
            });
        }

        function createProductCard(product) {
            const card = document.createElement('div');
            card.className = 'product-card';
            
            const cartItem = cart.find(item => item.id === product.id);
            const inCart = cartItem ? true : false;
            const quantity = cartItem ? cartItem.quantity : 1;

            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='https://via.placeholder.com/300x250/ccc/999?text=Sem+Imagem'">
                <div class="product-info">
                    <span class="product-category">${product.category}</span>
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <p class="product-price">R$ ${product.price.toFixed(2)}</p>
                    <div class="product-actions">
                        <div class="quantity-control">
                            <button type="button" class="decrease-qty" data-product-id="${product.id}">−</button>
                            <input type="number" class="quantity-input" value="${quantity}" min="1" data-product-id="${product.id}">
                            <button type="button" class="increase-qty" data-product-id="${product.id}">+</button>
                        </div>
                            <button class="add-to-cart-btn" data-product-id="${product.id}">
                                Adicionar
                            </button>
                    </div>
                </div>
            `;

            // Abrir modal de detalhes ao clicar na imagem ou no título
            const productImage = card.querySelector('.product-image');
            const productName = card.querySelector('.product-name');
            
            productImage.addEventListener('click', () => openProductDetail(product));
            productName.addEventListener('click', () => openProductDetail(product));

            // Event listeners para quantidade
            const decreaseBtn = card.querySelector('.decrease-qty');
            const increaseBtn = card.querySelector('.increase-qty');
            const quantityInput = card.querySelector('.quantity-input');
            const addBtn = card.querySelector('.add-to-cart-btn');

            decreaseBtn.addEventListener('click', () => {
                const value = Math.max(1, parseInt(quantityInput.value) - 1);
                quantityInput.value = value;
            });

            increaseBtn.addEventListener('click', () => {
                quantityInput.value = parseInt(quantityInput.value) + 1;
            });

            quantityInput.addEventListener('change', () => {
                if (quantityInput.value < 1) quantityInput.value = 1;
            });

            addBtn.addEventListener('click', () => {
                const qty = parseInt(quantityInput.value);
                addToCart(product, qty);
                    // animação temporária de confirmação sem alterar permanentemente o botão
                    const originalHTML = addBtn.innerHTML;
                    addBtn.innerHTML = '<i class="fa-solid fa-check" aria-hidden="true"></i> Adicionado';
                    addBtn.classList.add('just-added');

                    setTimeout(() => {
                        addBtn.innerHTML = originalHTML;
                        addBtn.classList.remove('just-added');
                    }, 1200);
            });

            return card;
        }

        // ==================== CARRINHO ==================== 
        function addToCart(product, quantity) {
            const existingItem = cart.find(item => item.id === product.id);

            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                cart.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: quantity
                });
            }

            saveCart();
            updateCartCount();
            showNotification(`${product.name} adicionado ao carrinho!`);
        }

        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            saveCart();
            updateCartCount();
            renderCart();
        }

        function updateCartItemQuantity(productId, quantity) {
            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity = Math.max(1, quantity);
                saveCart();
                updateCartCount();
                renderCart();
            }
        }

        function saveCart() {
            localStorage.setItem('cart', JSON.stringify(cart));
        }

        function updateCartCount() {
            const count = cart.reduce((total, item) => total + item.quantity, 0);
            cartCount.textContent = count;
        }

        // ==================== RENDERIZAÇÃO CARRINHO ==================== 
        function renderCart() {
            cartItems.innerHTML = '';

            if (cart.length === 0) {
                cartItems.innerHTML = '<p style="text-align: center; color: #666;">Seu carrinho está vazio</p>';
                checkoutButton.style.display = 'none';
                checkoutForm.style.display = 'none';
                cartSummary.style.display = 'none';
                return;
            }

            cartSummary.style.display = 'block';

            cart.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.className = 'cart-item';
                itemElement.innerHTML = `
                    <div class="cart-item-info">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">R$ ${item.price.toFixed(2)}</div>
                    </div>
                    <div class="cart-item-quantity">
                        <button class="cart-decrease" data-product-id="${item.id}" aria-label="Diminuir quantidade"><i class="fa-solid fa-minus"></i></button>
                        <input type="number" min="1" value="${item.quantity}" data-product-id="${item.id}" class="cart-qty-input">
                        <button class="cart-increase" data-product-id="${item.id}" aria-label="Aumentar quantidade"><i class="fa-solid fa-plus"></i></button>
                    </div>
                    <div>R$ ${(item.price * item.quantity).toFixed(2)}</div>
                    <button class="remove-item-btn" data-product-id="${item.id}"><i class="fa-solid fa-trash" aria-hidden="true"></i></button>
                `;

                // remover item
                itemElement.querySelector('.remove-item-btn').addEventListener('click', () => {
                    removeFromCart(item.id);
                });

                // decrease / increase handlers
                const decreaseBtn = itemElement.querySelector('.cart-decrease');
                const increaseBtn = itemElement.querySelector('.cart-increase');
                const qtyInput = itemElement.querySelector('.cart-qty-input');

                decreaseBtn.addEventListener('click', () => {
                    const current = Math.max(1, parseInt(qtyInput.value) || 1);
                    updateCartItemQuantity(item.id, Math.max(1, current - 1));
                });

                increaseBtn.addEventListener('click', () => {
                    const current = Math.max(1, parseInt(qtyInput.value) || 1);
                    updateCartItemQuantity(item.id, current + 1);
                });

                // direct edit
                qtyInput.addEventListener('change', (e) => {
                    updateCartItemQuantity(item.id, parseInt(e.target.value));
                });

                cartItems.appendChild(itemElement);
            });

            updateCartSummary();
            checkoutButton.style.display = 'block';
        }

        function updateCartSummary() {
            const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
            const total = subtotal; // Sem taxa adicional por padrão

            cartSummary.innerHTML = `
                <div class="summary-row">
                    <span>Subtotal:</span>
                    <span>R$ ${subtotal.toFixed(2)}</span>
                </div>
                <div class="summary-row total">
                    <span>Total:</span>
                    <span>R$ ${total.toFixed(2)}</span>
                </div>
            `;
        }

        // ==================== CHECKOUT E WHATSAPP ==================== 
        finalizeCheckout.addEventListener('click', () => {
            checkoutButton.style.display = 'none';
            checkoutForm.style.display = 'block';
            checkoutForm.scrollIntoView({ behavior: 'smooth' });
        });

        backToCart.addEventListener('click', () => {
            checkoutForm.style.display = 'none';
            checkoutButton.style.display = 'block';
        });

        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const customerName = document.getElementById('customerName').value;
            const customerPhone = document.getElementById('customerPhone').value;
            const customerAddress = document.getElementById('customerAddress').value;
            const customerNotes = document.getElementById('customerNotes').value;

            // Ler método de pagamento e troco
            const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked') ? document.querySelector('input[name="paymentMethod"]:checked').value : 'Pix';
            const cashChangeNeeded = document.querySelector('input[name="cashChangeNeeded"]:checked') ? document.querySelector('input[name="cashChangeNeeded"]:checked').value : 'Não';
            const cashChangeAmount = cashChangeAmountInput && cashChangeAmountInput.value ? parseFloat(cashChangeAmountInput.value).toFixed(2) : '';

            // Gerar mensagem formatada
            const message = generateWhatsAppMessage(customerName, customerPhone, customerAddress, customerNotes, paymentMethod, cashChangeNeeded, cashChangeAmount);
            
            // Redirecionar para WhatsApp
            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
            
            window.open(whatsappUrl, '_blank');

            // Limpar carrinho e formulário após sucesso
            setTimeout(() => {
                cart = [];
                saveCart();
                updateCartCount();
                checkoutForm.reset();
                cartModal.classList.remove('active');
                showNotification('Pedido enviado com sucesso! 🎉');
            }, 1000);
        });

        function generateWhatsAppMessage(name, phone, address, notes, paymentMethod, cashChangeNeeded, cashChangeAmount) {
            let message = '📦 *NOVO PEDIDO*\n\n';
            message += `👤 *Cliente:* ${name}\n`;
            message += `📱 *Telefone:* ${phone}\n`;
            message += `📍 *Endereço:* ${address}\n`;
            
            if (notes) {
                message += `📝 *Observações:* ${notes}\n`;
            }

            // Forma de pagamento
            if (paymentMethod) {
                message += `\n💳 *Forma de Pagamento:* ${paymentMethod}\n`;
                if (paymentMethod === 'Dinheiro') {
                    message += `🧾 *Precisa de troco:* ${cashChangeNeeded || 'Não'}\n`;
                    if (cashChangeNeeded === 'Sim' && cashChangeAmount) {
                        message += `💵 *Valor para troco:* R$ ${cashChangeAmount}\n`;
                    }
                }
            }
            
            message += '\n*ITENS DO PEDIDO:*\n';
            message += '─'.repeat(40) + '\n';

            cart.forEach((item, index) => {
                message += `${index + 1}. ${item.name}\n`;
                message += `   Quantidade: ${item.quantity}x\n`;
                message += `   Preço unitário: R$ ${item.price.toFixed(2)}\n`;
                message += `   Subtotal: R$ ${(item.price * item.quantity).toFixed(2)}\n`;
                message += '─'.repeat(40) + '\n';
            });

            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            message += `\n💰 *TOTAL: R$ ${total.toFixed(2)}*`;

            return message;
        }

        // ==================== MODAL DETALHES DO PRODUTO ====================
        const productDetailModal = document.getElementById('productDetailModal');
        const closeProductDetail = document.getElementById('closeProductDetail');
        const detailProductName = document.getElementById('detailProductName');
        const detailGalleryTrack = document.getElementById('detailGalleryTrack');
        const detailProductCategory = document.getElementById('detailProductCategory');
        const detailProductDescription = document.getElementById('detailProductDescription');
        const detailProductPrice = document.getElementById('detailProductPrice');
        const detailQuantityInput = document.getElementById('detailQuantityInput');
        const detailDecreaseQty = document.getElementById('detailDecreaseQty');
        const detailIncreaseQty = document.getElementById('detailIncreaseQty');
        const detailAddToCartBtn = document.getElementById('detailAddToCartBtn');

        function openProductDetail(product) {
            detailProductName.textContent = product.name;
            const galleryImages = Array.isArray(product.images) && product.images.length
                ? product.images
                : [product.image];
            detailGalleryTrack.innerHTML = galleryImages
                .map((src, index) => `
                    <img src="${src}" alt="${product.name} - foto ${index + 1}"
                        onerror="this.src='https://via.placeholder.com/600x400/ccc/999?text=Sem+Imagem'">
                `)
                .join('');
            detailProductCategory.textContent = product.category;
            detailProductDescription.textContent = product.description;
            detailProductPrice.textContent = `R$ ${product.price.toFixed(2)}`;
            detailQuantityInput.value = 1;
            
            productDetailModal.classList.add('active');

            // Configurar event listeners para quantidade
            detailDecreaseQty.onclick = () => {
                const value = Math.max(1, parseInt(detailQuantityInput.value) - 1);
                detailQuantityInput.value = value;
            };

            detailIncreaseQty.onclick = () => {
                detailQuantityInput.value = parseInt(detailQuantityInput.value) + 1;
            };

            // Configurar evento de clique para adicionar ao carrinho
            detailAddToCartBtn.onclick = () => {
                const qty = parseInt(detailQuantityInput.value);
                addToCart(product, qty);
                
                // Animação de confirmação
                const originalHTML = detailAddToCartBtn.innerHTML;
                detailAddToCartBtn.innerHTML = '<i class="fa-solid fa-check" aria-hidden="true"></i> Adicionado ao Carrinho';
                detailAddToCartBtn.classList.add('just-added');

                setTimeout(() => {
                    detailAddToCartBtn.innerHTML = originalHTML;
                    detailAddToCartBtn.classList.remove('just-added');
                }, 1200);

                // Fechar modal após adicionar
                setTimeout(() => {
                    productDetailModal.classList.remove('active');
                }, 800);
            };
        }

        // Fechar modal de detalhes do produto
        closeProductDetail.addEventListener('click', () => {
            productDetailModal.classList.remove('active');
        });

        productDetailModal.addEventListener('click', (e) => {
            if (e.target === productDetailModal) {
                productDetailModal.classList.remove('active');
            }
        });

        // ==================== MODAL CARRINHO ==================== 
        searchInput.addEventListener('input', filterProducts);
        categoryFilter.addEventListener('change', filterProducts);
        resetFilters.addEventListener('click', () => {
            searchInput.value = '';
            categoryFilter.value = '';
            if (minPriceInput) minPriceInput.value = '';
            if (maxPriceInput) maxPriceInput.value = '';
            renderProducts(PRODUCTS);
        });

        function filterProducts() {
            const searchTerm = searchInput.value.toLowerCase();
            const selectedCategory = categoryFilter.value;
            const minPrice = minPriceInput && minPriceInput.value !== '' ? parseFloat(minPriceInput.value) : null;
            const maxPrice = maxPriceInput && maxPriceInput.value !== '' ? parseFloat(maxPriceInput.value) : null;

            const filtered = PRODUCTS.filter(product => {
                const matchesSearch = product.name.toLowerCase().includes(searchTerm) ||
                                    product.description.toLowerCase().includes(searchTerm);
                const matchesCategory = selectedCategory === '' || product.category === selectedCategory;
                let matchesPrice = true;
                if (minPrice !== null) matchesPrice = product.price >= minPrice;
                if (matchesPrice && maxPrice !== null) matchesPrice = product.price <= maxPrice;

                return matchesSearch && matchesCategory && matchesPrice;
            });

            renderProducts(filtered);
        }

        // ==================== MODAL CARRINHO ==================== 
        cartIcon.addEventListener('click', () => {
            cartModal.classList.add('active');
            renderCart();
        });

        closeCartModal.addEventListener('click', () => {
            cartModal.classList.remove('active');
        });

        cartModal.addEventListener('click', (e) => {
            if (e.target === cartModal) {
                cartModal.classList.remove('active');
            }
        });

        // ==================== NOTIFICAÇÕES ==================== 
        function showNotification(message) {
            // Toast simples via alert (pode ser melhorado)
            console.log('✅', message);
        }

        // Configura listeners adicionais (ex.: opção de pagamento)
        function setupEventListeners() {
            // mostrar/ocultar opções de troco quando selecionar Dinheiro
            paymentMethodInputs.forEach(input => {
                input.addEventListener('change', () => {
                    const selected = document.querySelector('input[name="paymentMethod"]:checked');
                    if (selected && selected.value === 'Dinheiro') {
                        cashOptions.style.display = 'block';
                    } else {
                        if (cashOptions) cashOptions.style.display = 'none';
                        if (cashAmountWrapper) cashAmountWrapper.style.display = 'none';
                    }
                });
            });

            // mostrar campo de valor de troco quando marcar "Sim"
            cashChangeInputs.forEach(input => {
                input.addEventListener('change', () => {
                    const need = document.querySelector('input[name="cashChangeNeeded"]:checked');
                    if (need && need.value === 'Sim') {
                        if (cashAmountWrapper) cashAmountWrapper.style.display = 'block';
                    } else {
                        if (cashAmountWrapper) cashAmountWrapper.style.display = 'none';
                        if (cashChangeAmountInput) cashChangeAmountInput.value = '';
                    }
                });
            });

            // price inputs handled by numeric inputs
        }

        function formatCurrency(value) {
            return `R$ ${parseFloat(value).toFixed(2)}`;
        }

        
