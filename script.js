// ==========================================================
// Nori 요리 레시피 계산기
// ==========================================================


// ==========================================================
// 일반 요리 20개
// ==========================================================

const normalRecipes = [

    {
        name: "감자 구이",
        image: "images/normal_01.png",
        score: 7210,
        ingredients: [
            { icon: "🥔", name: "감자의 정수", amount: 3 },
            { icon: "🪵", name: "나무의 정수", amount: 1 }
        ]
    },

    {
        name: "감자 팬케이크",
        image: "images/normal_02.png",
        score: 16100,
        ingredients: [
            { icon: "🥔", name: "감자의 정수", amount: 3 },
            { icon: "🌾", name: "밀의 정수", amount: 1 },
            { icon: "🪵", name: "나무의 정수", amount: 1 }
        ]
    },

    {
        name: "달콤 당근 스튜",
        image: "images/normal_03.png",
        score: 11230,
        ingredients: [
            { icon: "🥕", name: "당근의 정수", amount: 3 },
            { icon: "🌿", name: "사탕수수의 정수", amount: 1 },
            { icon: "🪵", name: "나무의 정수", amount: 1 }
        ]
    },

    {
        name: "당근 빵",
        image: "images/normal_04.png",
        score: 16420,
        ingredients: [
            { icon: "🥕", name: "당근의 정수", amount: 3 },
            { icon: "🌾", name: "밀의 정수", amount: 1 },
            { icon: "🪵", name: "나무의 정수", amount: 1 }
        ]
    },

    {
        name: "대나무 리조또",
        image: "images/normal_05.png",
        score: 14150,
        ingredients: [
            { icon: "🎋", name: "대나무의 정수", amount: 2 },
            { icon: "🌾", name: "밀의 정수", amount: 1 },
            { icon: "🪵", name: "나무의 정수", amount: 1 }
        ]
    },

    {
        name: "루비 비트 샐러드",
        image: "images/normal_06.png",
        score: 35550,
        ingredients: [
            { icon: "🟣", name: "비트의 정수", amount: 1 },
            { icon: "🍎", name: "사과", amount: 8 }
        ]
    },

    {
        name: "매운 호박 수프",
        image: "images/normal_07.png",
        score: 24960,
        ingredients: [
            { icon: "🎃", name: "호박의 정수", amount: 1 },
            { icon: "🌿", name: "사탕수수의 정수", amount: 2 },
            { icon: "🟣", name: "비트의 정수", amount: 1 },
            { icon: "🪵", name: "나무의 정수", amount: 1 }
        ]
    },

    {
        name: "베리 파르페",
        image: "images/normal_08.png",
        score: 7430,
        ingredients: [
            { icon: "🍓", name: "달콤한 열매의 정수", amount: 3 },
            { icon: "🌿", name: "사탕수수의 정수", amount: 2 }
        ]
    },

    {
        name: "베리 파이",
        image: "images/normal_09.png",
        score: 17170,
        ingredients: [
            { icon: "🍓", name: "달콤한 열매의 정수", amount: 3 },
            { icon: "🌾", name: "밀의 정수", amount: 1 },
            { icon: "🪵", name: "나무의 정수", amount: 1 }
        ]
    },

    {
        name: "비트 크림 수프",
        image: "images/normal_10.png",
        score: 13440,
        ingredients: [
            { icon: "🟣", name: "비트의 정수", amount: 1 },
            { icon: "🪵", name: "나무의 정수", amount: 1 }
        ]
    },

    {
        name: "사각 빵",
        image: "images/normal_11.png",
        score: 13440,
        ingredients: [
            { icon: "🌾", name: "밀의 정수", amount: 1 },
            { icon: "🪵", name: "나무의 정수", amount: 1 }
        ]
    },

    {
        name: "사과 허브 빵",
        image: "images/normal_12.png",
        score: 26770,
        ingredients: [
            { icon: "🌾", name: "밀의 정수", amount: 1 },
            { icon: "🍎", name: "사과", amount: 4 },
            { icon: "🪵", name: "나무의 정수", amount: 1 }
        ]
    },

    {
        name: "설탕 크리스탈",
        image: "images/normal_13.png",
        score: 8240,
        ingredients: [
            { icon: "🌿", name: "사탕수수의 정수", amount: 2 },
            { icon: "🪵", name: "나무의 정수", amount: 1 }
        ]
    },

    {
        name: "수박 볼",
        image: "images/normal_14.png",
        score: 5650,
        ingredients: [
            { icon: "🍉", name: "수박 조각의 정수", amount: 3 },
            { icon: "🍓", name: "달콤한 열매의 정수", amount: 3 }
        ]
    },

    {
        name: "수박 샤베트",
        image: "images/normal_15.png",
        score: 5610,
        ingredients: [
            { icon: "🍉", name: "수박 조각의 정수", amount: 3 },
            { icon: "🌿", name: "사탕수수의 정수", amount: 2 }
        ]
    },

    {
        name: "죽순 구이",
        image: "images/normal_16.png",
        score: 5260,
        ingredients: [
            { icon: "🎋", name: "대나무의 정수", amount: 2 },
            { icon: "🪵", name: "나무의 정수", amount: 1 }
        ]
    },

    {
        name: "초코 스낵바",
        image: "images/normal_17.png",
        score: 8960,
        ingredients: [
            { icon: "🟫", name: "코코아의 정수", amount: 2 },
            { icon: "🌿", name: "사탕수수의 정수", amount: 2 },
            { icon: "🪵", name: "나무의 정수", amount: 1 }
        ]
    },

    {
        name: "카라멜 비스킷",
        image: "images/normal_18.png",
        score: 17130,
        ingredients: [
            { icon: "🌿", name: "사탕수수의 정수", amount: 2 },
            { icon: "🌾", name: "밀의 정수", amount: 1 },
            { icon: "🪵", name: "나무의 정수", amount: 1 }
        ]
    },

    {
        name: "핫 코코아",
        image: "images/normal_19.png",
        score: 4400,
        ingredients: [
            { icon: "🟫", name: "코코아의 정수", amount: 2 },
            { icon: "🌿", name: "사탕수수의 정수", amount: 2 }
        ]
    },

    {
        name: "호박 파이",
        image: "images/normal_20.png",
        score: 21260,
        ingredients: [
            { icon: "🎃", name: "호박의 정수", amount: 1 },
            { icon: "🌾", name: "밀의 정수", amount: 1 },
            { icon: "🪵", name: "나무의 정수", amount: 1 }
        ]
    }

];


// ==========================================================
// 고품질 요리 10개
// ==========================================================

const qualityRecipes = [

    {
        name: "달콤 골드 호박 파운드",
        image: "images/normal_21.png",
        score: 769000,
        ingredients: [
            { icon: "🎃", name: "고품질 호박 조각", amount: 3 },
            { icon: "🌾", name: "고품질 밀", amount: 3 },
            { icon: "🌿", name: "고품질 사탕수수", amount: 1 }
        ]
    },

    {
        name: "달콤 아삭 당근 수박 화채",
        image: "images/quality_01.png",
        score: 549000,
        ingredients: [
            { icon: "🍉", name: "고품질 수박 조각", amount: 2 },
            { icon: "🥕", name: "고품질 당근", amount: 2 },
            { icon: "🍓", name: "고품질 달콤한 열매", amount: 1 }
        ]
    },

    {
        name: "루비 비트 당근 브레드",
        image: "images/quality_02.png",
        score: 439000,
        ingredients: [
            { icon: "🥕", name: "고품질 당근", amount: 1 },
            { icon: "🟣", name: "고품질 비트", amount: 1 },
            { icon: "🌾", name: "고품질 밀", amount: 2 }
        ]
    },

    {
        name: "볼드 핀키 베리 감자 캡",
        image: "images/quality_03.png",
        score: 659000,
        ingredients: [
            { icon: "🎃", name: "고품질 호박 조각", amount: 1 },
            { icon: "🥔", name: "고품질 감자", amount: 2 },
            { icon: "🍓", name: "고품질 달콤한 열매", amount: 3 }
        ]
    },

    {
        name: "스위트 칠리 웨지 감자",
        image: "images/quality_04.png",
        score: 549000,
        ingredients: [
            { icon: "🥔", name: "고품질 감자", amount: 2 },
            { icon: "🌿", name: "고품질 사탕수수", amount: 2 },
            { icon: "🌿", name: "고품질 네더 사마귀", amount: 1 }
        ]
    },

    {
        name: "스파이시 수박 당근 크러쉬",
        image: "images/quality_05.png",
        score: 439000,
        ingredients: [
            { icon: "🍉", name: "고품질 수박 조각", amount: 2 },
            { icon: "🥕", name: "고품질 당근", amount: 1 },
            { icon: "🌿", name: "고품질 네더 사마귀", amount: 1 }
        ]
    },

    {
        name: "지옥불 베리 비트 포타주",
        image: "images/quality_06.png",
        score: 659000,
        ingredients: [
            { icon: "🟣", name: "고품질 비트", amount: 2 },
            { icon: "🍓", name: "고품질 달콤한 열매", amount: 1 },
            { icon: "🌿", name: "고품질 네더 사마귀", amount: 3 }
        ]
    },

    {
        name: "클래식 로제 비트 감자 스프",
        image: "images/quality_07.png",
        score: 329000,
        ingredients: [
            { icon: "🟣", name: "고품질 비트", amount: 1 },
            { icon: "🥔", name: "고품질 감자", amount: 1 },
            { icon: "🌾", name: "고품질 밀", amount: 1 }
        ]
    },

    {
        name: "트로피컬 베리 수박 샤베트",
        image: "images/quality_08.png",
        score: 549000,
        ingredients: [
            { icon: "🍉", name: "고품질 수박 조각", amount: 3 },
            { icon: "🍓", name: "고품질 달콤한 열매", amount: 1 },
            { icon: "🌿", name: "고품질 사탕수수", amount: 1 }
        ]
    },

    {
        name: "마녀의 흉측한 수프",
        image: "images/quality_09.png",
        score: 1186800,
        ingredients: [
            { icon: "🌾", name: "고품질 밀", amount: 1 },
            { icon: "🟣", name: "고품질 비트", amount: 1 },
            { icon: "🥕", name: "고품질 당근", amount: 1 },
            { icon: "🎃", name: "고품질 호박 조각", amount: 1 },
            { icon: "🍉", name: "고품질 수박 조각", amount: 1 },
            { icon: "🌿", name: "고품질 네더 사마귀", amount: 1 },
            { icon: "🍓", name: "고품질 달콤한 열매", amount: 1 },
            { icon: "🌿", name: "고품질 사탕수수", amount: 1 }
        ]
    }

];


// ==========================================================
// 숫자 표시
// ==========================================================

function formatNumber(number) {

    return Number(number).toLocaleString("ko-KR");

}


// ==========================================================
// 마인크래프트 세트 표시
// 64개 = 1세트
// ==========================================================

function formatStacks(number) {

    number = Math.max(0, Math.floor(Number(number) || 0));

    const stacks = Math.floor(number / 64);
    const remainder = number % 64;

    if (stacks === 0) {
        return `${formatNumber(remainder)}개`;
    }

    if (remainder === 0) {
        return `${formatNumber(stacks)}세트`;
    }

    return `${formatNumber(stacks)}세트 + ${formatNumber(remainder)}개`;
}


// ==========================================================
// 재료 HTML
// ==========================================================

function createIngredientHTML(ingredient, multiplier = 1) {

    const total =
        ingredient.amount * multiplier;

    return `
        <p>
            ${ingredient.icon}
            ${ingredient.name}
            ${formatNumber(total)}개
        </p>
    `;

}


// ==========================================================
// 요리 카드 생성
// ==========================================================

function createRecipeCard(recipe) {

    const card =
        document.createElement("div");

    card.className =
        "recipe-card";


    card.innerHTML = `

        <div class="recipe-name">
            ${recipe.name}
        </div>

        <div class="recipe-image">

            <img
                src="${recipe.image}"
                alt="${recipe.name}"
                draggable="false"
            >

        </div>

        <div class="ingredients">

            ${recipe.ingredients
                .map(function (ingredient) {

                    return createIngredientHTML(
                        ingredient,
                        1
                    );

                })
                .join("")
            }

        </div>

        <div class="score">

            ${formatNumber(recipe.score)}점

        </div>

    `;


    // 이미지 오류 처리

    const image =
        card.querySelector("img");


    if (image) {

        image.addEventListener(
            "error",
            function () {

                this.style.display =
                    "none";

            }
        );

    }


    // 카드 클릭

    card.addEventListener(
        "click",
        function () {

            openModal(recipe);

        }
    );


    return card;

}


// ==========================================================
// 레시피 출력
// ==========================================================

function renderRecipes(
    normalList = normalRecipes,
    qualityList = qualityRecipes
) {

    const normalContainer =
        document.getElementById(
            "normalRecipes"
        );

    const qualityContainer =
        document.getElementById(
            "qualityRecipes"
        );

    const noResult =
        document.getElementById(
            "noResult"
        );


    if (
        !normalContainer ||
        !qualityContainer
    ) {

        console.error(
            "레시피 영역을 찾을 수 없습니다."
        );

        return;

    }


    // 기존 카드 제거

    normalContainer.innerHTML = "";

    qualityContainer.innerHTML = "";


    // 일반 요리

    normalList.forEach(
        function (recipe) {

            normalContainer.appendChild(
                createRecipeCard(recipe)
            );

        }
    );


    // 고품질 요리

    qualityList.forEach(
        function (recipe) {

            qualityContainer.appendChild(
                createRecipeCard(recipe)
            );

        }
    );


    // 검색 결과 없음

    const total =
        normalList.length +
        qualityList.length;


    if (noResult) {

        noResult.style.display =
            total === 0
                ? "block"
                : "none";

    }

}


// ==========================================================
// 검색
// ==========================================================

function searchRecipes(keyword) {

    const search =
        keyword
            .trim()
            .toLowerCase();


    // 검색어 없음

    if (search === "") {

        renderRecipes();

        return;

    }


    // 일반 요리 검색

    const normalResult =
        normalRecipes.filter(
            function (recipe) {

                const ingredientText =
                    recipe.ingredients
                        .map(
                            function (ingredient) {

                                return ingredient.name;

                            }
                        )
                        .join(" ");


                const text =
                    (
                        recipe.name +
                        " " +
                        ingredientText
                    )
                    .toLowerCase();


                return text.includes(search);

            }
        );


    // 고품질 요리 검색

    const qualityResult =
        qualityRecipes.filter(
            function (recipe) {

                const ingredientText =
                    recipe.ingredients
                        .map(
                            function (ingredient) {

                                return ingredient.name;

                            }
                        )
                        .join(" ");


                const text =
                    (
                        recipe.name +
                        " " +
                        ingredientText
                    )
                    .toLowerCase();


                return text.includes(search);

            }
        );


    renderRecipes(
        normalResult,
        qualityResult
    );

}


// ==========================================================
// 계산기 생성
// ==========================================================

function createCalculator(recipe) {

    const calculator =
        document.createElement("div");


    calculator.id =
        "recipeCalculator";
    calculator.className = "recipe-calculator";


    calculator.innerHTML = `

        <div class="calculator-title">
            🧮 요리 점수 계산
        </div>

        <div class="calculator-description">
            만들 요리의 개수를 입력하세요.
        </div>

        <div class="calculator-input-row">

            <label for="recipeCount">
                제작 개수
            </label>

            <input
                id="recipeCount"
                type="number"
                min="1"
                value="1"
            >

            <span>개</span>

        </div>


        <button
            id="calculateRecipe"
            type="button"
        >
            계산하기
        </button>

        <button
            id="craftRecipe"
            type="button"
            style="
                width:100%;
                margin-top:10px;
                padding:12px;
                border:0;
                border-radius:12px;
                background:#e28a22;
                color:white;
                font-size:17px;
                font-weight:700;
                cursor:pointer;
            "
        >
            🍳 제작하기 (보유 정수 차감)
        </button>


        <div
            id="calculationResult"
            class="calculation-result"
        >

            <div class="result-line">

                <span>
                    제작 개수
                </span>

                <strong>
                    1개
                </strong>

            </div>


            <div class="result-line">

                <span>
                    1개 점수
                </span>

                <strong>
                    ${formatNumber(recipe.score)}점
                </strong>

            </div>


            <div class="result-total">

                1개 =
                ${formatNumber(recipe.score)}점

            </div>

        </div>

    `;


    return calculator;

}


// ==========================================================
// 요리 계산
// ==========================================================

function calculateRecipeScore(recipe) {

    const countInput =
        document.getElementById(
            "recipeCount"
        );

    const result =
        document.getElementById(
            "calculationResult"
        );


    if (
        !countInput ||
        !result
    ) {

        return;

    }


    let count =
        parseInt(
            countInput.value,
            10
        );


    // 잘못된 숫자

    if (
        isNaN(count) ||
        count < 1
    ) {

        count = 1;

    }


    // 소수 제거

    count =
        Math.floor(count);


    countInput.value =
        count;


    // ======================================================
    // 총 점수
    // ======================================================

    const totalScore =
        recipe.score * count;


    // ======================================================
    // 재료별 총 필요 개수 + 제작 원가 계산
    // ======================================================

    let totalIngredients =
        0;

    // 가격 설정에서 입력한 재료/정수 단가를 가져옵니다.
    // 예: 감자의 정수 1,800원 × 3개 = 5,400원
    const prices = loadEssencePrices();
    let unitCost = 0;
    let missingPriceCount = 0;


    const ingredientHTML =
        recipe.ingredients
            .map(
                function (ingredient) {

                    const total =
                        ingredient.amount *
                        count;


                    totalIngredients +=
                        total;

                    const price = Number(prices[ingredient.name] || 0);
                    if (price > 0) {
                        unitCost += price * Number(ingredient.amount || 0);
                    } else {
                        missingPriceCount++;
                    }


                    return `

                        <div class="required-ingredient">

                            <span>
                                ${ingredient.icon}
                                ${ingredient.name}
                            </span>

                            <strong>
                                ${formatNumber(total)}개
                                ${formatStacks(total)}
                            </strong>

                        </div>

                    `;

                }
            )
            .join("");


    // ======================================================
    // 개인 판매가격 / 수수료 계산
    // ======================================================

    const salePrices = loadRecipeSalePrices();
    const salePrice = Number(salePrices[recipe.name] || 0);
    const userFee = loadUserFee();
    const grossSales = salePrice * count;
    const feeAmount = grossSales * (userFee / 100);
    const netSales = grossSales - feeAmount;
    const totalCost = unitCost * count;
    const totalProfit = netSales - totalCost;

    // ======================================================
    // 결과 출력
    // ======================================================

    result.innerHTML = `

        <div class="result-line">

            <span>
                제작 개수
            </span>

            <strong>
                ${formatNumber(count)}개
            </strong>

        </div>


        <div class="result-line">

            <span>
                1개 점수
            </span>

            <strong>
                ${formatNumber(recipe.score)}점
            </strong>

        </div>


        <div class="result-line">

            <span>
                1개 제작 원가
            </span>

            <strong style="color:#a45d16;">
                ${unitCost > 0 ? formatNumber(unitCost) + "원" : "가격 미입력"}
            </strong>

        </div>


        <div class="result-line">
            <span>개당 판매가격</span>
            <strong style="color:#1d6fa5;">${salePrice > 0 ? formatNumber(salePrice) + "원" : "가격 미입력"}</strong>
        </div>

        <div class="result-line">
            <span>개인 수수료</span>
            <strong>${formatNumber(userFee)}%</strong>
        </div>

        <div class="required-title">

            📦 필요한 정수

        </div>


        <div class="required-ingredients">

            ${ingredientHTML}

        </div>


        <div class="result-total">

            ${formatNumber(count)}개
            =
            ${formatNumber(totalScore)}점

        </div>

        <div style="
            margin-top:10px;
            padding:12px;
            border:2px solid #d3a45f;
            border-radius:10px;
            background:#fffaf0;
            display:flex;
            justify-content:space-between;
            align-items:center;
            gap:10px;
        ">
            <span style="font-weight:700;">💰 총 제작 가격</span>
            <strong style="font-size:18px;color:#a45d16;">
                ${unitCost > 0 ? formatNumber(unitCost * count) + "원" : "가격 미입력"}
            </strong>
        </div>

        <div style="
            margin-top:8px;
            padding:12px;
            border:2px solid #72a8c9;
            border-radius:10px;
            background:#f3faff;
            display:flex;
            justify-content:space-between;
            align-items:center;
            gap:10px;
        ">
            <span style="font-weight:700;">💵 총 판매 가격 (수수료 차감 후)</span>
            <strong style="font-size:18px;color:#1d6fa5;">
                ${salePrice > 0 ? formatNumber(netSales) + "원" : "가격 미입력"}
            </strong>
        </div>

        <div style="
            margin-top:8px;
            padding:12px;
            border:2px solid ${totalProfit >= 0 ? '#72bf91' : '#d58a8a'};
            border-radius:10px;
            background:${totalProfit >= 0 ? '#f2fff7' : '#fff5f5'};
            display:flex;
            justify-content:space-between;
            align-items:center;
            gap:10px;
        ">
            <span style="font-weight:700;">📈 총 순이익</span>
            <strong style="font-size:18px;color:${totalProfit >= 0 ? '#138a4d' : '#c23b3b'};">
                ${salePrice > 0 ? formatNumber(totalProfit) + "원" : "가격 미입력"}
            </strong>
        </div>

        <div style="
            margin-top:8px;
            padding:12px;
            border:2px solid ${totalProfit >= 0 ? '#8aa6d5' : '#d58a8a'};
            border-radius:10px;
            background:${totalProfit >= 0 ? '#f5f8ff' : '#fff5f5'};
            display:flex;
            justify-content:space-between;
            align-items:center;
            gap:10px;
        ">
            <span style="font-weight:700;">📊 수익률 (마진율)</span>
            <strong style="font-size:18px;color:${totalProfit >= 0 ? '#2468a8' : '#c23b3b'};">
                ${salePrice > 0 && netSales > 0 ? ((totalProfit / netSales) * 100).toFixed(2) + "%" : "가격 미입력"}
            </strong>
        </div>

        ${missingPriceCount > 0 ? `
            <div style="margin-top:8px;font-size:12px;color:#b36b00;">
                ※ 가격을 입력하지 않은 재료는 총 제작 가격에 포함되지 않았습니다.
            </div>
        ` : ""}

    `;

}


// ==========================================================
// 레시피 상세 팝업
// ==========================================================

function createInventoryRecipeDetail(recipe) {

    const box = document.createElement("div");

    box.id = "inventoryRecipeDetail";

    const inventory =
        window.noriCurrentInventory || {};

    const maxCount =
        calculateMaxCraftable(
            recipe,
            inventory
        );

    if (!maxCount || maxCount < 1) {
        return box;
    }

    const ingredientHTML =
        recipe.ingredients
            .map(function (ingredient) {

                const owned =
                    Number(
                        inventory[ingredient.name] || 0
                    );

                const needed =
                    ingredient.amount *
                    maxCount;

                const remaining =
                    Math.max(
                        0,
                        owned - needed
                    );

                return `
                    <div style="
                        display:flex;
                        align-items:center;
                        justify-content:space-between;
                        gap:10px;
                        padding:7px 0;
                        border-bottom:1px solid rgba(0,0,0,.08);
                        font-size:14px;
                    ">
                        <span>
                            ${ingredient.icon}
                            ${ingredient.name}
                        </span>

                        <strong>
                            ${formatNumber(needed)}개
                            (${formatStacks(needed)})
                        </strong>
                    </div>
                `;

            })
            .join("");

    box.innerHTML = `
        <div style="
            margin-top:14px;
            padding:14px;
            border:2px solid #20b96d;
            border-radius:12px;
            background:#f5fff8;
        ">

            <div style="
                font-size:16px;
                font-weight:700;
                margin-bottom:8px;
            ">
                📦 현재 보유 정수 기준
            </div>

            <div style="
                font-size:14px;
                margin-bottom:10px;
            ">
                최대
                <strong>${formatNumber(maxCount)}개</strong>
                제작할 수 있습니다.
            </div>

            <div style="
                font-size:14px;
                margin-bottom:8px;
                font-weight:700;
            ">
                필요한 정수
            </div>

            ${ingredientHTML}

            <div style="
                margin-top:10px;
                padding-top:8px;
                font-size:15px;
                font-weight:700;
                text-align:center;
            ">
                🏆 총 획득 점수
                ${formatNumber(recipe.score * maxCount)}점
            </div>

        </div>
    `;

    return box;

}


function openModal(recipe) {

    const modal =
        document.getElementById(
            "modal"
        );

    const image =
        document.getElementById(
            "modalImage"
        );

    const name =
        document.getElementById(
            "modalName"
        );

    const ingredients =
        document.getElementById(
            "modalIngredients"
        );

    const score =
        document.getElementById(
            "modalScore"
        );


    if (!modal) {

        console.error(
            "modal 요소를 찾을 수 없습니다."
        );

        return;

    }


    // ======================================================
    // 이미지
    // ======================================================

    if (image) {

        image.src =
            recipe.image;

        image.alt =
            recipe.name;

        image.style.display =
            "block";

    }


    // ======================================================
    // 이름
    // ======================================================

    if (name) {

        name.textContent =
            recipe.name;

    }


    // ======================================================
    // 기본 재료 표시
    // ======================================================

    if (ingredients) {

        ingredients.innerHTML =
            recipe.ingredients
                .map(
                    function (ingredient) {

                        return `

                            <p>
                                ${ingredient.icon}
                                ${ingredient.name}
                                ${formatNumber(
                                    ingredient.amount
                                )}개
                            </p>

                        `;

                    }
                )
                .join("");

    }


    // ======================================================
    // 기본 점수
    // ======================================================

    if (score) {

        score.textContent =
            `${formatNumber(recipe.score)}점`;

    }


    // ======================================================
    // 정수 가격 기준 원가 표시
    // ======================================================

    const oldPriceBox = document.getElementById("recipePriceBox");
    if (oldPriceBox) oldPriceBox.remove();

    const priceBox = document.createElement("div");
    priceBox.id = "recipePriceBox";
    priceBox.className = "recipe-price-box";
    priceBox.style.cssText = `
        margin-top:14px;
        padding:14px;
        border:2px solid #d3a45f;
        border-radius:12px;
        background:#fffaf0;
        box-sizing:border-box;
    `;

    const prices = loadEssencePrices();
    let essenceCost = 0;
    let pricedCount = 0;
    let missingPriceCount = 0;

    const priceLines = (recipe.ingredients || []).map(function (ingredient) {
        const price = Number(prices[ingredient.name] || 0);
        const amount = Number(ingredient.amount || 0);
        const lineCost = price * amount;

        if (price > 0) {
            pricedCount++;
            essenceCost += lineCost;
        } else {
            missingPriceCount++;
        }

        return `
            <div style="
                display:flex;
                justify-content:space-between;
                gap:10px;
                padding:5px 0;
                border-bottom:1px solid rgba(0,0,0,.07);
                font-size:14px;
            ">
                <span>${ingredient.icon} ${ingredient.name} × ${formatNumber(amount)}</span>
                <strong>${price > 0 ? formatNumber(lineCost) + "원" : "가격 미입력"}</strong>
            </div>
        `;
    }).filter(Boolean).join("");

    const salePrices = loadRecipeSalePrices();
    const salePrice = Number(salePrices[recipe.name] || 0);
    const userFee = loadUserFee();
    const feePerItem = salePrice * (userFee / 100);
    const netSalePerItem = salePrice - feePerItem;
    const profitPerItem = netSalePerItem - essenceCost;

    priceBox.innerHTML = `
        <div style="font-size:16px;font-weight:700;margin-bottom:8px;">💰 재료 가격 기준 원가</div>
        ${priceLines || '<div style="font-size:14px;color:#777;">이 레시피에는 정수 재료가 없습니다.</div>'}
        <div style="
            margin-top:10px;
            padding-top:10px;
            border-top:2px solid #e0c58e;
            display:flex;
            justify-content:space-between;
            font-size:16px;
            font-weight:700;
        ">
            <span>총 재료 원가</span>
            <strong style="color:#a45d16;">${formatNumber(essenceCost)}원</strong>
        </div>
        ${missingPriceCount > 0 ? `
            <div style="margin-top:8px;font-size:12px;color:#b36b00;">
                ※ 가격을 입력하지 않은 재료는 원가에 포함되지 않았습니다.
            </div>
        ` : ""}

        <div style="margin-top:12px;padding-top:10px;border-top:2px solid #e0c58e;">
            <div style="font-size:16px;font-weight:700;margin-bottom:6px;">💵 개인 판매 기준</div>
            <div style="display:flex;justify-content:space-between;padding:4px 0;font-size:14px;"><span>판매가격</span><strong>${salePrice > 0 ? formatNumber(salePrice) + "원" : "가격 미입력"}</strong></div>
            <div style="display:flex;justify-content:space-between;padding:4px 0;font-size:14px;"><span>개인 수수료</span><strong>${formatNumber(userFee)}%</strong></div>
            <div style="display:flex;justify-content:space-between;padding:4px 0;font-size:14px;"><span>수수료 금액</span><strong>${salePrice > 0 ? formatNumber(feePerItem) + "원" : "-"}</strong></div>
            <div style="display:flex;justify-content:space-between;padding:4px 0;font-size:14px;"><span>수수료 차감 후</span><strong style="color:#138a4d;">${salePrice > 0 ? formatNumber(netSalePerItem) + "원" : "가격 미입력"}</strong></div>
            <div style="display:flex;justify-content:space-between;padding:4px 0;font-size:15px;font-weight:700;"><span>1개 순이익</span><strong style="color:${profitPerItem >= 0 ? "#138a4d" : "#c23b3b"};">${salePrice > 0 ? formatNumber(profitPerItem) + "원" : "가격 미입력"}</strong></div>
        </div>
    `;


    // ======================================================
    // 기존 계산기 제거
    // ======================================================

    const oldCalculator =
        document.getElementById(
            "recipeCalculator"
        );


    if (oldCalculator) {

        oldCalculator.remove();

    }


    // ======================================================
    // 기존 보유 정수 상세 정보 제거
    // ======================================================

    const oldInventoryDetail =
        document.getElementById(
            "inventoryRecipeDetail"
        );

    if (oldInventoryDetail) {

        oldInventoryDetail.remove();

    }


    // ======================================================
    // 계산기 생성
    // ======================================================

    const calculator =
        createCalculator(recipe);


    const modalContent =
        modal.querySelector(
            ".modal-content"
        );


    if (modalContent) {

        const inventoryDetail =
            createInventoryRecipeDetail(
                recipe
            );

        if (
            inventoryDetail &&
            inventoryDetail.innerHTML
        ) {

            modalContent.appendChild(
                inventoryDetail
            );

        }

        modalContent.appendChild(
            priceBox
        );

        modalContent.appendChild(
            calculator
        );

    }


    // ======================================================
    // 계산 버튼
    // ======================================================

    const calculateButton =
        document.getElementById(
            "calculateRecipe"
        );

    const countInput =
        document.getElementById(
            "recipeCount"
        );


    if (
        calculateButton &&
        countInput
    ) {

        calculateButton.addEventListener(
            "click",
            function () {

                calculateRecipeScore(
                    recipe
                );

            }
        );


        // 엔터키로 계산

        countInput.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Enter"
                ) {

                    calculateRecipeScore(
                        recipe
                    );

                }

            }
        );

    }


    // ======================================================
    // 제작하기 버튼
    // ======================================================

    const craftButton =
        document.getElementById(
            "craftRecipe"
        );

    if (craftButton && countInput) {

        craftButton.addEventListener(
            "click",
            function () {

                let count = parseInt(
                    countInput.value,
                    10
                );

                if (isNaN(count) || count < 1) {
                    count = 1;
                }

                count = Math.floor(count);
                countInput.value = count;

                const crafted =
                    craftRecipeFromInventory(
                        recipe,
                        count
                    );

                if (crafted) {

                    const result =
                        document.getElementById(
                            "calculationResult"
                        );

                    if (result) {

                        result.innerHTML = `
                            <div style="
                                padding:12px;
                                border-radius:10px;
                                background:#e9fff1;
                                color:#138a4d;
                                font-weight:700;
                                text-align:center;
                            ">
                                ✅ ${formatNumber(count)}개 제작 완료!<br>
                                ${formatNumber(recipe.score * count)}점 획득
                            </div>
                        `;

                    }

                }

            }
        );

    }


    // ======================================================
    // 팝업 열기
    // ======================================================

    modal.classList.add(
        "show"
    );

}


// ==========================================================
// 팝업 닫기
// ==========================================================

function closeModal() {

    const modal =
        document.getElementById(
            "modal"
        );


    if (modal) {

        modal.classList.remove(
            "show"
        );

    }

}


// ==========================================================
// 보유 정수 → 제작 가능한 요리 찾기
// ==========================================================

function getAllRecipes() {

    return [
        ...normalRecipes,
        ...qualityRecipes
    ];

}


function getAllIngredients() {

    const ingredientMap = new Map();

    getAllRecipes().forEach(function (recipe) {

        recipe.ingredients.forEach(function (ingredient) {

            if (!ingredientMap.has(ingredient.name)) {

                ingredientMap.set(
                    ingredient.name,
                    {
                        name: ingredient.name,
                        icon: ingredient.icon
                    }
                );

            }

        });

    });

    return Array.from(ingredientMap.values());

}


function calculateMaxCraftable(recipe, inventory) {

    let maxCount = Infinity;

    recipe.ingredients.forEach(function (ingredient) {

        const owned =
            Number(inventory[ingredient.name] || 0);

        const possible =
            Math.floor(
                owned / ingredient.amount
            );

        maxCount =
            Math.min(
                maxCount,
                possible
            );

    });

    if (maxCount === Infinity) {

        return 0;

    }

    return Math.max(
        0,
        maxCount
    );

}



// ==========================================================
// 정수 가격 설정
// ==========================================================

const ESSENCE_PRICE_STORAGE_KEY = "nori_recipe_essence_prices_v1";


// ==========================================================
// 개인 판매가격 / 수수료 설정
// ==========================================================

const RECIPE_SALE_PRICE_STORAGE_KEY = "nori_recipe_sale_prices_v1";
const USER_FEE_STORAGE_KEY = "nori_recipe_user_fee_v1";

function loadRecipeSalePrices() {
    try {
        const saved = localStorage.getItem(RECIPE_SALE_PRICE_STORAGE_KEY);
        if (!saved) return {};
        const parsed = JSON.parse(saved);
        return parsed && typeof parsed === "object" ? parsed : {};
    } catch (error) {
        console.warn("개인 판매가격을 불러오지 못했습니다.", error);
        return {};
    }
}

function saveRecipeSalePrices(prices) {
    localStorage.setItem(RECIPE_SALE_PRICE_STORAGE_KEY, JSON.stringify(prices));
    window.noriRecipeSalePrices = { ...prices };
}

function loadUserFee() {
    try {
        const saved = localStorage.getItem(USER_FEE_STORAGE_KEY);
        if (saved === null) return 0;
        const value = Number(saved);
        if (!Number.isFinite(value) || value < 0) return 0;
        return Math.min(100, value);
    } catch (error) {
        console.warn("개인 수수료를 불러오지 못했습니다.", error);
        return 0;
    }
}

function saveUserFee(fee) {
    const value = Number(fee);
    const normalized = Number.isFinite(value) ? Math.min(100, Math.max(0, value)) : 0;
    localStorage.setItem(USER_FEE_STORAGE_KEY, String(normalized));
    window.noriUserFee = normalized;
}

window.noriRecipeSalePrices = loadRecipeSalePrices();
window.noriUserFee = loadUserFee();

function formatPercentInput(value) {
    const digits = String(value ?? "").replace(/[^0-9.]/g, "");
    if (!digits) return "";
    const num = Number(digits);
    if (!Number.isFinite(num)) return "";
    return String(Math.min(100, Math.max(0, num)));
}

function renderRecipeSalePriceInputs() {
    const container = document.getElementById("recipeSalePriceInputs");
    const feeInput = document.getElementById("userFeeInput");
    if (!container) return;

    const prices = loadRecipeSalePrices();
    const fee = loadUserFee();
    window.noriRecipeSalePrices = { ...prices };
    window.noriUserFee = fee;

    container.innerHTML = "";

    getAllRecipes().forEach(function (recipe) {
        const row = document.createElement("label");
        row.style.cssText = `
            display:flex;
            align-items:center;
            gap:8px;
            min-width:0;
            padding:10px;
            border:1px solid #e4d1ad;
            border-radius:10px;
            background:#fffaf0;
            box-sizing:border-box;
        `;

        const name = document.createElement("span");
        name.textContent = recipe.name;
        name.style.cssText = "flex:1;min-width:0;font-size:14px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;";

        const input = document.createElement("input");
        input.type = "text";
        input.inputMode = "numeric";
        input.dataset.salePriceName = recipe.name;
        input.placeholder = "판매가격";
        input.value = formatPriceInput(prices[recipe.name] || "");
        input.style.cssText = "width:105px;max-width:42%;padding:8px;border:1px solid #bbb;border-radius:8px;text-align:right;font-size:14px;box-sizing:border-box;";

        input.addEventListener("input", function () {
            this.value = formatPriceInput(this.value);
        });

        row.appendChild(name);
        row.appendChild(input);
        container.appendChild(row);
    });

    if (feeInput) {
        feeInput.value = fee ? String(fee) : "";
    }
}

function getAllPriceableIngredients() {
    const allRecipes = [
        ...(Array.isArray(normalRecipes) ? normalRecipes : []),
        ...(Array.isArray(qualityRecipes) ? qualityRecipes : [])
    ];

    const names = [];
    const seen = new Set();

    // 정수뿐 아니라 사과, 고품질 재료 등
    // 레시피에 실제로 사용되는 모든 재료를 가격 설정 대상으로 포함합니다.
    allRecipes.forEach(function (recipe) {
        (recipe.ingredients || []).forEach(function (ingredient) {
            if (ingredient.name && !seen.has(ingredient.name)) {
                seen.add(ingredient.name);
                names.push({
                    name: ingredient.name,
                    icon: ingredient.icon || "📦"
                });
            }
        });
    });

    return names;
}

// 기존 함수명을 사용하는 코드와의 호환을 유지합니다.
function getAllEssenceNames() {
    return getAllPriceableIngredients();
}

function loadEssencePrices() {
    try {
        const saved = localStorage.getItem(ESSENCE_PRICE_STORAGE_KEY);
        if (!saved) return {};
        const parsed = JSON.parse(saved);
        return parsed && typeof parsed === "object" ? parsed : {};
    } catch (error) {
        console.warn("정수 가격을 불러오지 못했습니다.", error);
        return {};
    }
}

function saveEssencePrices(prices) {
    localStorage.setItem(ESSENCE_PRICE_STORAGE_KEY, JSON.stringify(prices));
    window.noriEssencePrices = { ...prices };
}

window.noriEssencePrices = loadEssencePrices();

function formatPriceInput(value) {
    const digits = String(value ?? "").replace(/[^0-9]/g, "");
    if (!digits) return "";
    return Number(digits).toLocaleString("ko-KR");
}

function renderEssencePriceInputs() {
    const container = document.getElementById("essencePriceInputs");
    if (!container) return;

    const prices = loadEssencePrices();
    window.noriEssencePrices = { ...prices };
    container.innerHTML = "";

    getAllEssenceNames().forEach(function (item) {
        const row = document.createElement("label");
        row.style.cssText = `
            display:flex;
            align-items:center;
            gap:8px;
            min-width:0;
            padding:10px;
            border:1px solid #ddd;
            border-radius:10px;
            background:#fff;
            box-sizing:border-box;
        `;

        const name = document.createElement("span");
        name.textContent = `${item.icon} ${item.name}`;
        name.style.cssText = "flex:1;min-width:0;font-size:14px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;";

        const input = document.createElement("input");
        input.type = "text";
        input.inputMode = "numeric";
        input.dataset.essencePriceName = item.name;
        input.placeholder = "0";
        input.value = formatPriceInput(prices[item.name] || "");
        input.style.cssText = "width:105px;max-width:35%;padding:8px;border:1px solid #bbb;border-radius:8px;text-align:right;font-size:14px;box-sizing:border-box;";

        input.addEventListener("input", function () {
            this.value = formatPriceInput(this.value);
        });

        row.appendChild(name);
        row.appendChild(input);
        container.appendChild(row);
    });
}

function setupEssencePriceSettings() {
    const button = document.getElementById("openEssencePriceSettings");
    const panel = document.getElementById("essencePricePanel");
    const saveButton = document.getElementById("saveEssencePrices");
    const resetButton = document.getElementById("resetEssencePrices");
    const message = document.getElementById("essencePriceSaveMessage");

    if (!button || !panel) return;

    button.addEventListener("click", function () {
        const isOpen = panel.style.display !== "none";
        panel.style.display = isOpen ? "none" : "block";
        if (!isOpen) {
            renderEssencePriceInputs();
            renderRecipeSalePriceInputs();
        }
    });

    if (saveButton) {
        saveButton.addEventListener("click", function () {
            const prices = {};
            const salePrices = {};

            document.querySelectorAll("#essencePriceInputs input[data-essence-price-name]").forEach(function (input) {
                const digits = String(input.value || "").replace(/[^0-9]/g, "");
                prices[input.dataset.essencePriceName] = digits ? Number(digits) : 0;
            });

            document.querySelectorAll("#recipeSalePriceInputs input[data-sale-price-name]").forEach(function (input) {
                const digits = String(input.value || "").replace(/[^0-9]/g, "");
                salePrices[input.dataset.salePriceName] = digits ? Number(digits) : 0;
            });

            const feeInput = document.getElementById("userFeeInput");
            const fee = feeInput ? formatPercentInput(feeInput.value) : "0";

            saveEssencePrices(prices);
            saveRecipeSalePrices(salePrices);
            saveUserFee(fee || 0);

            if (message) {
                message.textContent = "✅ 재료 가격, 판매가격, 개인 수수료가 저장되었습니다.";
                message.style.color = "#18a85c";
                setTimeout(function () {
                    message.textContent = "";
                }, 2500);
            }
        });
    }

    if (resetButton) {
        resetButton.addEventListener("click", function () {
            if (!confirm("입력한 재료 가격만 초기화할까요?\n판매가격과 수수료는 유지됩니다.")) return;
            saveEssencePrices({});
            renderEssencePriceInputs();
            if (message) {
                message.textContent = "재료 가격이 초기화되었습니다.";
                message.style.color = "#777";
            }
        });
    }

    const resetSalePriceButton = document.getElementById("resetSalePriceData");
    if (resetSalePriceButton) {
        resetSalePriceButton.addEventListener("click", function () {
            if (!confirm("개인 판매가격과 수수료만 초기화할까요?\n재료 가격은 유지됩니다.")) return;
            saveRecipeSalePrices({});
            saveUserFee(0);
            renderRecipeSalePriceInputs();
            if (message) {
                message.textContent = "개인 판매가격과 수수료가 초기화되었습니다.";
                message.style.color = "#777";
            }
        });
    }
}

function createInventoryFinder() {

    if (document.getElementById("inventoryFinder")) {

        return;

    }

    const wrapper =
        document.createElement("div");

    wrapper.id =
        "inventoryFinder";

    wrapper.style.cssText = `
        margin: 12px 0 22px;
        font-family: inherit;
    `;

    wrapper.innerHTML = `

        <button
            id="openInventoryFinder"
            type="button"
            style="
                width:100%;
                padding:14px 18px;
                border:2px solid #18b86a;
                border-radius:14px;
                background:#18b86a;
                color:white;
                font-size:18px;
                font-weight:700;
                cursor:pointer;
            "
        >
            🧮 보유 정수로 만들 수 있는 요리 찾기
        </button>

        <button
            id="openOwnedRecipeScore"
            type="button"
            style="
                width:100%;
                margin-top:10px;
                padding:14px 18px;
                border:2px solid #18b86a;
                border-radius:14px;
                background:#18b86a;
                color:white;
                font-size:18px;
                font-weight:700;
                cursor:pointer;
            "
        >
            🍳 보유 요리로 점수 계산
        </button>

        <button
            id="openEssencePriceSettings"
            type="button"
            style="
                width:100%;
                margin-top:10px;
                padding:14px 18px;
                border:2px solid #18b86a;
                border-radius:14px;
                background:#18b86a;
                color:white;
                font-size:18px;
                font-weight:700;
                cursor:pointer;
            "
        >
            💰 재료 가격 설정
        </button>

        <div
            id="essencePricePanel"
            style="
                display:none;
                margin-top:12px;
                padding:18px;
                border:2px solid #18b86a;
                border-radius:16px;
                background:rgba(255,255,255,.92);
                box-sizing:border-box;
            "
        >
            <div style="font-size:20px;font-weight:700;margin-bottom:8px;">💰 재료 가격 설정</div>
            <div style="font-size:14px;margin-bottom:14px;line-height:1.5;">각 재료 1개의 가격을 직접 입력하세요.<br>정수, 사과, 고품질 재료 등 모든 레시피 재료의 가격을 설정할 수 있습니다. 입력한 가격은 이 브라우저에 자동으로 저장됩니다.</div>
            <div id="essencePriceInputs" style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;width:100%;box-sizing:border-box;"></div>

            <div style="margin-top:18px;padding-top:16px;border-top:2px solid #ead8b7;">
                <div style="font-size:18px;font-weight:700;margin-bottom:6px;">💵 개인 판매가격 / 수수료</div>
                <div style="font-size:13px;color:#666;line-height:1.5;margin-bottom:10px;">요리별 판매가격과 본인에게 적용되는 수수료를 직접 입력하세요. 입력값은 이 브라우저에 자동 저장됩니다.</div>
                <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
                    <label for="userFeeInput" style="font-weight:700;white-space:nowrap;">개인 수수료</label>
                    <input id="userFeeInput" type="text" inputmode="decimal" placeholder="0" style="width:90px;padding:8px;border:1px solid #bbb;border-radius:8px;text-align:right;box-sizing:border-box;">
                    <span>%</span>
                </div>
                <div id="recipeSalePriceInputs" style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;width:100%;box-sizing:border-box;"></div>
            </div>

            <div style="display:flex;gap:8px;margin-top:14px;">
                <button id="saveEssencePrices" type="button" style="flex:1;padding:12px;border:0;border-radius:12px;background:#18b86a;color:white;font-size:16px;font-weight:700;cursor:pointer;">💾 가격 저장</button>
                <button id="resetEssencePrices" type="button" style="padding:12px 16px;border:2px solid #bbb;border-radius:12px;background:white;color:#555;font-size:15px;font-weight:700;cursor:pointer;">재료 가격 초기화</button>
                <button id="resetSalePriceData" type="button" style="padding:12px 16px;border:2px solid #bbb;border-radius:12px;background:white;color:#555;font-size:15px;font-weight:700;cursor:pointer;">판매가격/수수료 초기화</button>
            </div>
            <div id="essencePriceSaveMessage" style="margin-top:10px;text-align:center;font-size:14px;font-weight:700;"></div>
        </div>

        <div
            id="ownedRecipeScorePanel"
            style="
                display:none;
                margin-top:12px;
                padding:18px;
                border:2px solid #18b86a;
                border-radius:16px;
                background:rgba(255,255,255,.92);
                box-sizing:border-box;
            "
        >

            <div style="
                font-size:20px;
                font-weight:700;
                margin-bottom:8px;
            ">
                🍳 보유 요리 입력
                <small style="display:block;font-size:11px;font-weight:400;opacity:.65;margin-top:3px;">64개 = 1세트 · 54세트 = 1큰상자(3,456개) · 입력 시 자동 정리</small>
            </div>

            <div style="
                font-size:14px;
                margin-bottom:14px;
                line-height:1.5;
            ">
                가지고 있는 요리의 개수를 입력하면<br>
                입력한 수량을 기준으로 총 요리 점수를 자동으로 계산합니다.
            </div>

            <div
                id="ownedRecipeInputs"
                style="
                    display:grid;
                    grid-template-columns:repeat(3,minmax(0,1fr));
                    gap:8px;
                    width:100%;
                    max-width:100%;
                    box-sizing:border-box;
                "
            ></div>

            <div
                id="ownedRecipeScoreResult"
                style="
                    margin-top:14px;
                    padding:16px;
                    border-radius:12px;
                    background:#fff8e8;
                    border:2px solid #e5b94b;
                    text-align:center;
                "
            >
                <div style="font-size:14px;font-weight:700;">
                    🏆 현재 보유 요리 총점
                </div>
                <div id="ownedRecipeTotalScore" style="font-size:25px;font-weight:800;margin-top:5px;">
                    0점
                </div>
                <div id="ownedRecipeCountSummary" style="font-size:13px;margin-top:5px;">
                    보유 요리 0개
                </div>
            </div>

            <button
                id="resetOwnedRecipeData"
                type="button"
                style="width:100%;margin-top:10px;padding:10px;border:2px solid #bbb;border-radius:12px;background:white;color:#555;font-size:14px;font-weight:700;cursor:pointer;"
            >🔄 보유 요리 입력 초기화</button>

        </div>

        <div
            id="inventoryPanel"
            style="
                display:none;
                margin-top:12px;
                padding:18px;
                border:2px solid #18b86a;
                border-radius:16px;
                background:rgba(255,255,255,.92);
                box-sizing:border-box;
            "
        >

            <div style="
                font-size:20px;
                font-weight:700;
                margin-bottom:8px;
            ">
                📦 보유 정수 입력
            </div>

            <div style="
                font-size:14px;
                margin-bottom:14px;
                line-height:1.5;
            ">
                가지고 있는 정수의 개수를 입력하면<br>
                현재 만들 수 있는 레시피를 자동으로 찾아줍니다.
            </div>

            <div
                id="inventoryInputs"
                style="
                    display:grid;
                    grid-template-columns:repeat(4,minmax(0,1fr));
                    gap:8px;
                    width:100%;
                    max-width:100%;
                    box-sizing:border-box;
                "
            ></div>

            <button
                id="resetInventoryData"
                type="button"
                style="width:100%;margin-top:8px;padding:10px;border:2px solid #bbb;border-radius:12px;background:white;color:#555;font-size:14px;font-weight:700;cursor:pointer;"
            >🔄 보유 정수 입력 초기화</button>

            <button
                id="findCraftableRecipes"
                type="button"
                style="
                    width:100%;
                    margin-top:14px;
                    padding:12px;
                    border:0;
                    border-radius:12px;
                    background:#18b86a;
                    color:white;
                    font-size:17px;
                    font-weight:700;
                    cursor:pointer;
                "
            >
                만들 수 있는 요리 찾기
            </button>

            <div id="craftableResults"></div>

        </div>

        <div id="dataManagementPanel" style="margin-top:12px;padding:18px;border:2px solid #18b86a;border-radius:16px;background:rgba(255,255,255,.92);box-sizing:border-box;">
            <div style="font-size:20px;font-weight:700;margin-bottom:6px;">💾 데이터 저장 / 불러오기</div>
            <div style="font-size:14px;line-height:1.5;color:#666;margin-bottom:12px;">보유 정수, 보유 요리, 재료 가격, 개인 판매가격, 개인 수수료를 파일 하나로 저장하거나 불러올 수 있습니다.</div>
            <div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;">
                <button id="exportNoriData" type="button" style="padding:12px;border:0;border-radius:12px;background:#18b86a;color:white;font-size:15px;font-weight:700;cursor:pointer;">💾 데이터 저장</button>
                <button id="importNoriData" type="button" style="padding:12px;border:2px solid #18b86a;border-radius:12px;background:white;color:#168a50;font-size:15px;font-weight:700;cursor:pointer;">📂 데이터 불러오기</button>
                <button id="resetAllNoriData" type="button" style="padding:12px;border:2px solid #b44;border-radius:12px;background:white;color:#a33;font-size:15px;font-weight:700;cursor:pointer;">⚠️ 전체 데이터 초기화</button>
            </div>
            <input id="importNoriDataFile" type="file" accept="application/json,.json" style="display:none;">
            <div id="dataManagementMessage" style="margin-top:10px;text-align:center;font-size:14px;font-weight:700;"></div>
        </div>
    `;

    // 검색창 바로 앞에 배치
    const searchInput =
        document.getElementById("searchInput");

    if (searchInput && searchInput.parentElement) {

        searchInput.parentElement.parentElement.insertBefore(
            wrapper,
            searchInput.parentElement
        );

    } else {

        document.body.insertBefore(
            wrapper,
            document.body.firstChild
        );

    }

    const inputs =
        document.getElementById("inventoryInputs");

    getAllIngredients().forEach(function (ingredient) {

        const row =
            document.createElement("label");

        row.style.cssText = `
            display:flex;
            align-items:center;
            gap:8px;
            padding:8px 10px;
            border:1px solid #c9e8d5;
            border-radius:10px;
            background:#f7fff9;
            box-sizing:border-box;
            width:100%;
            max-width:100%;
            min-width:0;
            overflow:hidden;
        `;

        row.innerHTML = `
            <span style="
                flex:1 1 auto;
                min-width:0;
                white-space:nowrap;
                overflow:hidden;
                text-overflow:ellipsis;
            ">
                ${ingredient.icon} ${ingredient.name}
            </span>

            <input
                type="number"
                min="0"
                step="1"
                value="0"
                data-ingredient="${ingredient.name}"
                style="
                    flex:0 0 82px;
                    width:82px;
                    min-width:0;
                    margin-left:auto;
                    padding:7px;
                    border:1px solid #aaa;
                    border-radius:7px;
                    box-sizing:border-box;
                "
            >
        `;

        inputs.appendChild(row);

    });

    // 이전에 입력했던 보유 정수 복원
    restoreSavedInventory();

    // ======================================================
    // 보유 요리 점수 계산기 생성
    // ======================================================

    createOwnedRecipeScoreCalculator();

    // 입력할 때마다 자동 저장
    inputs
        .querySelectorAll("input[data-ingredient]")
        .forEach(function (input) {

            input.addEventListener(
                "input",
                function () {

                    saveInventoryFromInputs();

                }
            );

        });

    document
        .getElementById("openInventoryFinder")
        .addEventListener("click", function () {

            const panel =
                document.getElementById("inventoryPanel");

            panel.style.display =
                panel.style.display === "none"
                    ? "block"
                    : "none";

        });

    // ==========================================================
    // 개별 초기화 / 데이터 저장·불러오기
    // ==========================================================

    function clearInventoryData() {
        localStorage.removeItem(NORI_INVENTORY_STORAGE_KEY);
        document.querySelectorAll("#inventoryInputs input[data-ingredient]").forEach(function (input) {
            input.value = "";
        });
        const result = document.getElementById("craftableResults");
        if (result) result.innerHTML = "";
    }

    function clearOwnedRecipeData() {
        localStorage.removeItem(NORI_OWNED_RECIPE_STORAGE_KEY);
        document.querySelectorAll("#ownedRecipeInputs input").forEach(function (input) {
            input.value = "";
        });
        if (typeof calculateOwnedRecipeScore === "function") calculateOwnedRecipeScore();
    }

    function getNoriBackupData() {
        return {
            version: 1,
            exportedAt: new Date().toISOString(),
            essencePrices: loadEssencePrices(),
            recipeSalePrices: loadRecipeSalePrices(),
            userFee: loadUserFee(),
            inventory: loadSavedInventory(),
            ownedRecipes: loadSavedOwnedRecipes()
        };
    }

    function refreshNoriDataUI() {
        renderEssencePriceInputs();
        renderRecipeSalePriceInputs();
        document.querySelectorAll("#inventoryInputs input[data-ingredient]").forEach(function (input) { input.value = ""; });
        document.querySelectorAll("#ownedRecipeInputs input").forEach(function (input) { input.value = ""; });
        restoreSavedInventory();

        const ownedSaved = loadSavedOwnedRecipes();
        document.querySelectorAll("#ownedRecipeInputs .owned-recipe-row").forEach(function (row) {
            const name = row.dataset.recipeName;
            const savedValue = ownedSaved[name];
            let boxes = 0, sets = 0, pieces = 0;
            if (savedValue && typeof savedValue === "object") {
                boxes = Number(savedValue.boxes || 0);
                sets = Number(savedValue.sets || 0);
                pieces = Number(savedValue.pieces || 0);
            } else if (savedValue != null) {
                const count = Number(savedValue) || 0;
                boxes = Math.floor(count / 3456);
                const remainder = count % 3456;
                sets = Math.floor(remainder / 64);
                pieces = remainder % 64;
            }
            boxes += Math.floor(sets / 54);
            sets = sets % 54;
            const boxInput = row.querySelector("input[data-recipe-boxes]");
            const setInput = row.querySelector("input[data-recipe-sets]");
            const pieceInput = row.querySelector("input[data-recipe-pieces]");
            if (boxInput) boxInput.value = boxes;
            if (setInput) setInput.value = sets;
            if (pieceInput) pieceInput.value = pieces;
        });
        if (typeof calculateOwnedRecipeScore === "function") calculateOwnedRecipeScore();
    }

    function setupNoriDataManagement() {
        const exportButton = document.getElementById("exportNoriData");
        const importButton = document.getElementById("importNoriData");
        const fileInput = document.getElementById("importNoriDataFile");
        const resetAllButton = document.getElementById("resetAllNoriData");
        const message = document.getElementById("dataManagementMessage");
        function showMessage(text, color) {
            if (!message) return;
            message.textContent = text;
            message.style.color = color || "#168a50";
            setTimeout(function () { message.textContent = ""; }, 3000);
        }

        if (exportButton) exportButton.addEventListener("click", function () {
            const blob = new Blob([JSON.stringify(getNoriBackupData(), null, 2)], { type: "application/json;charset=utf-8" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            const d = new Date();
            const stamp = `${d.getFullYear()}${String(d.getMonth()+1).padStart(2,"0")}${String(d.getDate()).padStart(2,"0")}`;
            a.href = url; a.download = `새봄농장_데이터_${stamp}.json`;
            document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
            showMessage("✅ 데이터 파일이 저장되었습니다.");
        });

        if (importButton && fileInput) {
            importButton.addEventListener("click", function () { fileInput.click(); });
            fileInput.addEventListener("change", function () {
                const file = fileInput.files && fileInput.files[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onload = function () {
                    try {
                        const data = JSON.parse(reader.result);
                        if (!data || Number(data.version) !== 1) throw new Error("지원하지 않는 데이터 파일입니다.");
                        if (!confirm("저장된 데이터를 불러오면 현재 입력값이 덮어써집니다. 계속할까요?")) return;
                        saveEssencePrices(data.essencePrices && typeof data.essencePrices === "object" ? data.essencePrices : {});
                        saveRecipeSalePrices(data.recipeSalePrices && typeof data.recipeSalePrices === "object" ? data.recipeSalePrices : {});
                        saveUserFee(data.userFee || 0);
                        localStorage.setItem(NORI_INVENTORY_STORAGE_KEY, JSON.stringify(data.inventory && typeof data.inventory === "object" ? data.inventory : {}));
                        localStorage.setItem(NORI_OWNED_RECIPE_STORAGE_KEY, JSON.stringify(data.ownedRecipes && typeof data.ownedRecipes === "object" ? data.ownedRecipes : {}));
                        refreshNoriDataUI();
                        showMessage("✅ 데이터가 불러와졌습니다.");
                    } catch (e) {
                        console.error(e); showMessage("❌ 데이터 파일을 불러오지 못했습니다.", "#b33");
                    } finally { fileInput.value = ""; }
                };
                reader.readAsText(file, "utf-8");
            });
        }

        if (resetAllButton) resetAllButton.addEventListener("click", function () {
            if (!confirm("⚠️ 전체 데이터를 초기화할까요?\\n\\n보유 정수 / 보유 요리 / 재료 가격 / 개인 판매가격 / 개인 수수료가 모두 삭제됩니다.\\n이 작업은 되돌릴 수 없습니다.")) return;
            localStorage.removeItem(NORI_INVENTORY_STORAGE_KEY);
            localStorage.removeItem(NORI_OWNED_RECIPE_STORAGE_KEY);
            localStorage.removeItem(ESSENCE_PRICE_STORAGE_KEY);
            localStorage.removeItem(RECIPE_SALE_PRICE_STORAGE_KEY);
            localStorage.removeItem(USER_FEE_STORAGE_KEY);
            window.noriEssencePrices = {};
            window.noriRecipeSalePrices = {};
            window.noriUserFee = 0;
            document.querySelectorAll("#inventoryInputs input[data-ingredient], #ownedRecipeInputs input").forEach(function (input) { input.value = ""; });
            const result = document.getElementById("craftableResults"); if (result) result.innerHTML = "";
            renderEssencePriceInputs(); renderRecipeSalePriceInputs();
            if (typeof calculateOwnedRecipeScore === "function") calculateOwnedRecipeScore();
            showMessage("전체 데이터가 초기화되었습니다.", "#777");
        });
    }

    const resetInventoryButton = document.getElementById("resetInventoryData");
    if (resetInventoryButton) resetInventoryButton.addEventListener("click", function () {
        if (!confirm("보유 정수 입력만 초기화할까요? 다른 데이터는 유지됩니다.")) return;
        clearInventoryData();
    });

    const resetOwnedButton = document.getElementById("resetOwnedRecipeData");
    if (resetOwnedButton) resetOwnedButton.addEventListener("click", function () {
        if (!confirm("보유 요리 입력만 초기화할까요? 다른 데이터는 유지됩니다.")) return;
        clearOwnedRecipeData();
    });

    setupNoriDataManagement();

    document
        .getElementById("findCraftableRecipes")
        .addEventListener("click", function () {

            findCraftableRecipes();

        });

}


// ==========================================================
// 보유 정수 자동 저장
// ==========================================================

const NORI_INVENTORY_STORAGE_KEY =
    "nori_recipe_inventory_v1";


function loadSavedInventory() {

    try {

        const saved =
            localStorage.getItem(
                NORI_INVENTORY_STORAGE_KEY
            );

        if (!saved) {

            return {};

        }

        const data =
            JSON.parse(saved);

        if (
            !data ||
            typeof data !== "object" ||
            Array.isArray(data)
        ) {

            return {};

        }

        return data;

    } catch (error) {

        console.warn(
            "보유 정수 저장값을 불러오지 못했습니다.",
            error
        );

        return {};

    }

}


function saveInventoryFromInputs() {

    const inventory = {};

    document
        .querySelectorAll(
            "#inventoryInputs input[data-ingredient]"
        )
        .forEach(function (input) {

            let value =
                parseInt(
                    input.value,
                    10
                );

            if (isNaN(value) || value < 0) {

                value = 0;

            }

            value =
                Math.floor(value);

            inventory[
                input.dataset.ingredient
            ] =
                value;

        });

    try {

        localStorage.setItem(
            NORI_INVENTORY_STORAGE_KEY,
            JSON.stringify(inventory)
        );

    } catch (error) {

        console.warn(
            "보유 정수를 저장하지 못했습니다.",
            error
        );

    }

}


function restoreSavedInventory() {

    const saved =
        loadSavedInventory();

    document
        .querySelectorAll(
            "#inventoryInputs input[data-ingredient]"
        )
        .forEach(function (input) {

            const name =
                input.dataset.ingredient;

            if (
                Object.prototype.hasOwnProperty.call(
                    saved,
                    name
                )
            ) {

                let value =
                    parseInt(
                        saved[name],
                        10
                    );

                if (
                    isNaN(value) ||
                    value < 0
                ) {

                    value = 0;

                }

                input.value =
                    Math.floor(value);

            }

        });

}




// ==========================================================
// 보유 요리 점수 계산
// ==========================================================

const NORI_OWNED_RECIPE_STORAGE_KEY =
    "nori_owned_recipe_inventory_v1";


function loadSavedOwnedRecipes() {

    try {

        const saved =
            localStorage.getItem(
                NORI_OWNED_RECIPE_STORAGE_KEY
            );

        if (!saved) {
            return {};
        }

        const data = JSON.parse(saved);

        if (
            !data ||
            typeof data !== "object" ||
            Array.isArray(data)
        ) {
            return {};
        }

        return data;

    } catch (error) {

        console.warn(
            "보유 요리 저장값을 불러오지 못했습니다.",
            error
        );

        return {};

    }

}


// 보유 요리 수량을 큰상자 / 세트 / 낱개 형태로 자동 정리
// 1큰상자 = 54세트 = 3,456개
// 1세트 = 64개
function normalizeOwnedRecipeRow(row) {

    if (!row) return { boxes: 0, sets: 0, pieces: 0 };

    const boxInput = row.querySelector("input[data-recipe-boxes]");
    const setInput = row.querySelector("input[data-recipe-sets]");
    const pieceInput = row.querySelector("input[data-recipe-pieces]");

    let boxes = parseInt(boxInput ? boxInput.value : 0, 10);
    let sets = parseInt(setInput ? setInput.value : 0, 10);
    let pieces = parseInt(pieceInput ? pieceInput.value : 0, 10);

    if (isNaN(boxes) || boxes < 0) boxes = 0;
    if (isNaN(sets) || sets < 0) sets = 0;
    if (isNaN(pieces) || pieces < 0) pieces = 0;

    boxes = Math.floor(boxes);
    sets = Math.floor(sets);
    pieces = Math.floor(pieces);

    // 낱개가 64개 이상이면 세트로 자동 변환
    sets += Math.floor(pieces / 64);
    pieces = pieces % 64;

    // 세트가 54개 이상이면 큰상자로 자동 변환
    boxes += Math.floor(sets / 54);
    sets = sets % 54;

    if (boxInput) boxInput.value = boxes;
    if (setInput) setInput.value = sets;
    if (pieceInput) pieceInput.value = pieces;

    return { boxes, sets, pieces };
}


function saveOwnedRecipesFromInputs() {

    const owned = {};

    document
        .querySelectorAll(
            "#ownedRecipeInputs .owned-recipe-row"
        )
        .forEach(function (row) {

            const name = row.dataset.recipeName;
            const normalized = normalizeOwnedRecipeRow(row);

            owned[name] = normalized;

        });

    try {
        localStorage.setItem(
            NORI_OWNED_RECIPE_STORAGE_KEY,
            JSON.stringify(owned)
        );
    } catch (error) {
        console.warn("보유 요리 저장값을 저장하지 못했습니다.", error);
    }

}


function calculateOwnedRecipeScore() {

    let totalScore = 0;
    let totalCount = 0;

    document
        .querySelectorAll(
            "#ownedRecipeInputs .owned-recipe-row"
        )
        .forEach(function (row) {

            const boxInput = row.querySelector("input[data-recipe-boxes]");
            const setInput = row.querySelector("input[data-recipe-sets]");
            const pieceInput = row.querySelector("input[data-recipe-pieces]");

            const normalized = normalizeOwnedRecipeRow(row);

            const boxes = normalized.boxes;
            const sets = normalized.sets;
            const pieces = normalized.pieces;

            // 1큰상자 = 54세트 = 3456개
            const count = (boxes * 3456) + (sets * 64) + pieces;
            const score = Number(row.dataset.recipeScore || 0);

            totalCount += count;
            totalScore += score * count;

        });

    const totalScoreElement =
        document.getElementById("ownedRecipeTotalScore");

    if (totalScoreElement) {
        totalScoreElement.textContent =
            `${formatNumber(totalScore)}점`;
    }

    const countSummary =
        document.getElementById("ownedRecipeCountSummary");

    if (countSummary) {
        countSummary.textContent =
            `보유 요리 ${formatNumber(totalCount)}개`;
    }

    return totalScore;
}


function createOwnedRecipeScoreCalculator() {

    const inputsContainer =
        document.getElementById("ownedRecipeInputs");

    if (!inputsContainer || inputsContainer.dataset.initialized === "true") {
        return;
    }

    inputsContainer.dataset.initialized = "true";

    const responsiveStyle = document.createElement("style");
    responsiveStyle.textContent = `
        @media (max-width: 900px) {
            #ownedRecipeInputs {
                grid-template-columns:repeat(2,minmax(0,1fr)) !important;
            }
        }
        @media (max-width: 600px) {
            #ownedRecipeInputs {
                grid-template-columns:1fr !important;
            }
        }
        .owned-recipe-row .owned-recipe-input {
            width:58px;
            min-width:58px;
            padding:7px 5px;
            border:1px solid #aaa;
            border-radius:7px;
            box-sizing:border-box;
            text-align:center;
        }
        .owned-recipe-row .owned-recipe-input-label {
            font-size:10px;
            color:#666;
            display:block;
            text-align:center;
            margin-bottom:2px;
            white-space:nowrap;
        }
        @media (max-width: 1200px) {
            .owned-recipe-row .owned-recipe-input {
                width:50px;
                min-width:50px;
            }
        }
    `;
    document.head.appendChild(responsiveStyle);

    const saved = loadSavedOwnedRecipes();

    getAllRecipes().forEach(function (recipe) {

        const row = document.createElement("label");

        row.className = "owned-recipe-row";
        row.dataset.recipeName = recipe.name;
        row.dataset.recipeScore = recipe.score;

        row.style.cssText = `
            display:flex;
            align-items:center;
            gap:8px;
            padding:8px 10px;
            border:1px solid #c9e8d5;
            border-radius:10px;
            background:#f7fff9;
            box-sizing:border-box;
            width:100%;
            max-width:100%;
            min-width:0;
            overflow:hidden;
        `;

        // 이전 저장값과 기존 세트/낱개 저장값을 모두 호환
        let savedBoxes = 0;
        let savedSets = 0;
        let savedPieces = 0;
        const savedValue = saved[recipe.name];

        if (savedValue && typeof savedValue === "object") {
            savedBoxes = Number(savedValue.boxes || 0);
            savedSets = Number(savedValue.sets || 0);
            savedPieces = Number(savedValue.pieces || 0);
        } else {
            const oldCount = Number(savedValue || 0);
            savedBoxes = Math.floor(oldCount / 3456);
            const remainder = oldCount % 3456;
            savedSets = Math.floor(remainder / 64);
            savedPieces = remainder % 64;
        }

        // 세트/낱개만 저장된 이전 버전의 값도 큰상자로 정규화
        savedBoxes += Math.floor(savedSets / 54);
        savedSets = savedSets % 54;

        row.innerHTML = `
            <span style="
                flex:1 1 auto;
                min-width:0;
                white-space:nowrap;
                overflow:hidden;
                text-overflow:ellipsis;
                line-height:1.35;
            ">
                ${recipe.name}
                <small style="display:block;font-size:11px;opacity:.65;">
                    ${formatNumber(recipe.score)}점 / 1개
                </small>
            </span>

            <span style="display:flex;align-items:flex-end;gap:4px;flex:0 0 auto;">
                <span>
                    <span class="owned-recipe-input-label">큰상자</span>
                    <input
                        type="number"
                        min="0"
                        step="1"
                        value="${savedBoxes}"
                        data-recipe-boxes
                        class="owned-recipe-input"
                        aria-label="${recipe.name} 큰상자 수량"
                    >
                </span>
                <span>
                    <span class="owned-recipe-input-label">세트</span>
                    <input
                        type="number"
                        min="0"
                        max="53"
                        step="1"
                        value="${savedSets}"
                        data-recipe-sets
                        class="owned-recipe-input"
                        aria-label="${recipe.name} 세트 수량"
                    >
                </span>
                <span>
                    <span class="owned-recipe-input-label">낱개</span>
                    <input
                        type="number"
                        min="0"
                        max="63"
                        step="1"
                        value="${savedPieces}"
                        data-recipe-pieces
                        class="owned-recipe-input"
                        aria-label="${recipe.name} 낱개 수량"
                    >
                </span>
            </span>
        `;

        inputsContainer.appendChild(row);

    });

    inputsContainer
        .querySelectorAll(".owned-recipe-row input")
        .forEach(function (input) {

            // 입력하는 즉시 수량을 자동 정리합니다.
            // 예: 낱개 64 → 세트 +1, 낱개 100 → 세트 +1 + 낱개 36
            // 예: 세트 54 → 큰상자 +1, 세트 60 → 큰상자 +1 + 세트 6
            input.addEventListener("input", function () {
                const row = input.closest(".owned-recipe-row");
                normalizeOwnedRecipeRow(row);
                calculateOwnedRecipeScore();
                saveOwnedRecipesFromInputs();
            });

            // 키보드로 입력을 끝낸 뒤에도 한 번 더 정리합니다.
            input.addEventListener("change", function () {
                const row = input.closest(".owned-recipe-row");
                normalizeOwnedRecipeRow(row);
                calculateOwnedRecipeScore();
                saveOwnedRecipesFromInputs();
            });

            input.addEventListener("blur", function () {
                const row = input.closest(".owned-recipe-row");
                normalizeOwnedRecipeRow(row);
                calculateOwnedRecipeScore();
                saveOwnedRecipesFromInputs();
            });
        });

    calculateOwnedRecipeScore();
    saveOwnedRecipesFromInputs();

    const openButton =
        document.getElementById("openOwnedRecipeScore");

    if (openButton) {
        openButton.addEventListener("click", function () {
            const panel =
                document.getElementById("ownedRecipeScorePanel");
            if (!panel) return;
            panel.style.display =
                panel.style.display === "none"
                    ? "block"
                    : "none";
        });
    }

}


// ==========================================================
// 보유 정수 차감 후 실제 제작
// ==========================================================

function craftRecipeFromInventory(recipe, count) {

    const inputs =
        document.querySelectorAll(
            "#inventoryInputs input[data-ingredient]"
        );

    if (!inputs.length) {
        alert("먼저 보유 정수 입력창을 열어주세요.");
        return false;
    }

    const inventory = {};
    const inputMap = {};

    inputs.forEach(function (input) {

        let value = parseInt(input.value, 10);

        if (isNaN(value) || value < 0) {
            value = 0;
        }

        value = Math.floor(value);
        input.value = value;
        inventory[input.dataset.ingredient] = value;
        inputMap[input.dataset.ingredient] = input;

    });

    // 모든 재료가 충분한지 먼저 확인 (하나라도 부족하면 차감하지 않음)
    for (const ingredient of recipe.ingredients) {

        const owned = Number(inventory[ingredient.name] || 0);
        const required = ingredient.amount * count;

        if (owned < required) {

            alert(
                `${ingredient.name}이(가) 부족합니다.\n\n` +
                `필요: ${formatNumber(required)}개\n` +
                `보유: ${formatNumber(owned)}개`
            );

            return false;
        }
    }

    // 재료 차감
    recipe.ingredients.forEach(function (ingredient) {

        const required = ingredient.amount * count;
        inventory[ingredient.name] -= required;
        inputMap[ingredient.name].value = inventory[ingredient.name];

    });

    window.noriCurrentInventory = { ...inventory };
    saveInventoryFromInputs();

    // 제작 가능 레시피 목록도 즉시 갱신
    findCraftableRecipes();

    return true;

}


function findCraftableRecipes() {

    const inventory = {};

    document
        .querySelectorAll(
            "#inventoryInputs input[data-ingredient]"
        )
        .forEach(function (input) {

            let value =
                parseInt(
                    input.value,
                    10
                );

            if (isNaN(value) || value < 0) {

                value = 0;

            }

            value =
                Math.floor(value);

            input.value =
                value;

            inventory[
                input.dataset.ingredient
            ] =
                value;

        });

    // 마지막으로 계산한 보유 정수 저장
    window.noriCurrentInventory = { ...inventory };

    // 브라우저에도 저장
    try {

        localStorage.setItem(
            NORI_INVENTORY_STORAGE_KEY,
            JSON.stringify(inventory)
        );

    } catch (error) {

        console.warn(
            "보유 정수를 저장하지 못했습니다.",
            error
        );

    }

    const results =
        getAllRecipes()
            .map(function (recipe) {

                return {
                    recipe: recipe,
                    maxCount:
                        calculateMaxCraftable(
                            recipe,
                            inventory
                        )
                };

            })
            .filter(function (item) {

                return item.maxCount > 0;

            })
            .sort(function (a, b) {

                return b.maxCount - a.maxCount;

            });

    const resultBox =
        document.getElementById(
            "craftableResults"
        );

    if (!resultBox) {

        return;

    }

    if (results.length === 0) {

        resultBox.innerHTML = `

            <div style="
                margin-top:14px;
                padding:16px;
                border-radius:12px;
                background:#fff2f2;
                color:#c33;
                font-weight:700;
                text-align:center;
            ">
                만들 수 있는 요리가 없습니다.
            </div>

        `;

        return;

    }

    resultBox.innerHTML = `

        <div style="
            margin-top:18px;
            margin-bottom:10px;
            display:flex;
            align-items:center;
            justify-content:space-between;
            gap:10px;
            flex-wrap:wrap;
            font-size:20px;
            font-weight:700;
        ">

            <div>
                🍳 지금 만들 수 있는 요리
                <span style="
                    font-size:14px;
                    font-weight:400;
                ">
                    (${results.length}개)
                </span>
            </div>

            <select
                id="craftableSort"
                style="
                    padding:7px 10px;
                    border:2px solid #22b86b;
                    border-radius:8px;
                    background:white;
                    font-size:14px;
                    font-weight:600;
                    cursor:pointer;
                "
            >
                <option value="score">점수 높은 순</option>
                <option value="count">제작 가능 개수 많은 순</option>
                <option value="normal">일반 요리만</option>
                <option value="quality">고품질 요리만</option>
            </select>

        </div>

        <div
            id="craftableRecipeList"
            style="
                display:grid;
                grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
                gap:10px;
            "
        ></div>
    `;

    const craftableList =
        document.getElementById(
            "craftableRecipeList"
        );

    function isQualityRecipe(recipe) {

        return String(
            recipe.image || ""
        ).toLowerCase().includes(
            "quality_"
        );

    }

    function renderCraftableRecipes(sortType) {

        let sortedResults =
            results.slice();

        if (sortType === "score") {

            sortedResults.sort(
                function (a, b) {

                    return (
                        b.recipe.score * b.maxCount
                    ) - (
                        a.recipe.score * a.maxCount
                    );

                }
            );

        } else if (sortType === "count") {

            sortedResults.sort(
                function (a, b) {

                    return (
                        b.maxCount
                    ) - (
                        a.maxCount
                    );

                }
            );

        } else if (sortType === "normal") {

            sortedResults =
                sortedResults.filter(
                    function (item) {

                        return !isQualityRecipe(
                            item.recipe
                        );

                    }
                );

        } else if (sortType === "quality") {

            sortedResults =
                sortedResults.filter(
                    function (item) {

                        return isQualityRecipe(
                            item.recipe
                        );

                    }
                );

        }

        if (sortedResults.length === 0) {

            craftableList.innerHTML = `
                <div style="
                    grid-column:1/-1;
                    padding:20px;
                    text-align:center;
                    border:2px dashed #bbb;
                    border-radius:12px;
                    color:#777;
                ">
                    해당 조건으로 만들 수 있는 요리가 없습니다.
                </div>
            `;

            return;

        }

        craftableList.innerHTML =
            sortedResults.map(
                function (item) {

                    const recipe =
                        item.recipe;

                    return `

                        <div
                            data-result-recipe="${recipe.name}"
                            style="
                                display:flex;
                                align-items:center;
                                gap:10px;
                                padding:10px;
                                border:2px solid #22b86b;
                                border-radius:12px;
                                background:#f8fff9;
                                cursor:pointer;
                            "
                        >

                            <img
                                src="${recipe.image}"
                                alt="${recipe.name}"
                                style="
                                    width:64px;
                                    height:64px;
                                    object-fit:contain;
                                    flex:none;
                                "
                            >

                            <div style="
                                min-width:0;
                            ">

                                <div style="
                                    font-weight:700;
                                    margin-bottom:5px;
                                ">
                                    ${recipe.name}
                                </div>

                                <div style="
                                    font-size:13px;
                                ">
                                    최대
                                    <strong>
                                        ${formatNumber(
                                            item.maxCount
                                        )}개
                                    </strong>
                                    제작 가능
                                </div>

                                <div style="
                                    font-size:13px;
                                ">
                                    ${formatNumber(
                                        recipe.score *
                                        item.maxCount
                                    )}점
                                </div>

                            </div>

                        </div>

                    `;

                }
            ).join("");

        craftableList
            .querySelectorAll(
                "[data-result-recipe]"
            )
            .forEach(
                function (card) {

                    card.addEventListener(
                        "click",
                        function () {

                            const name =
                                card.dataset.resultRecipe;

                            const recipe =
                                getAllRecipes().find(
                                    function (item) {

                                        return (
                                            item.name ===
                                            name
                                        );

                                    }
                                );

                            if (recipe) {

                                openModal(
                                    recipe
                                );

                            }

                        }
                    );

                }
            );

    }

    renderCraftableRecipes(
        "score"
    );

    const craftableSort =
        document.getElementById(
            "craftableSort"
        );

    if (craftableSort) {

        craftableSort.addEventListener(
            "change",
            function () {

                renderCraftableRecipes(
                    this.value
                );

            }
        );

    }

    resultBox
        .querySelectorAll(
            "[data-result-recipe]"
        )
        .forEach(function (card) {

            card.addEventListener(
                "click",
                function () {

                    const name =
                        card.dataset.resultRecipe;

                    const recipe =
                        getAllRecipes().find(
                            function (item) {
                                return item.name === name;
                            }
                        );

                    if (recipe) {

                        openModal(recipe);

                    }

                }
            );

        });

}


// ==========================================================
// 보유 정수 입력창 반응형/잘림 방지
// ==========================================================

(function addInventoryResponsiveFinalStyle() {

    if (document.getElementById("inventory-responsive-final")) {
        return;
    }

    const style = document.createElement("style");
    style.id = "inventory-responsive-final";

    style.textContent = `
        #inventoryFinder,
        #inventoryFinder * {
            box-sizing: border-box;
        }

        #inventoryFinder {
            width: 100%;
            max-width: 100%;
            overflow: visible;
        }

        #inventoryPanel {
            width: 100% !important;
            max-width: 100% !important;
            overflow: hidden;
        }

        #inventoryInputs {
            width: 100% !important;
            max-width: 100% !important;
            min-width: 0;
        }

        #inventoryInputs label {
            min-width: 0;
            width: 100%;
            max-width: 100%;
            overflow: hidden;
        }

        #inventoryInputs input {
            max-width: 82px;
        }

        @media (max-width: 1100px) {
            #inventoryInputs {
                grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
            }
        }

        @media (max-width: 800px) {
            #inventoryInputs {
                grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            }
        }

        @media (max-width: 520px) {
            #inventoryInputs {
                grid-template-columns: 1fr !important;
            }
        }
    `;

    document.head.appendChild(style);

})();


// ==========================================================
// 페이지 시작
// ==========================================================


document.addEventListener(
    "DOMContentLoaded",
    function () {


        // ==================================================
        // 검색창
        // ==================================================

        const searchInput =
            document.getElementById(
                "searchInput"
            );


        if (searchInput) {

            searchInput.addEventListener(
                "input",
                function (event) {

                    searchRecipes(
                        event.target.value
                    );

                }
            );

        }


        // ==================================================
        // 전체 보기
        // ==================================================

        const resetButton =
            document.getElementById(
                "resetButton"
            );


        if (resetButton) {

            resetButton.addEventListener(
                "click",
                function () {

                    if (searchInput) {

                        searchInput.value =
                            "";

                    }


                    renderRecipes();

                }
            );

        }


        // ==================================================
        // 팝업 닫기 버튼
        // ==================================================

        const closeButton =
            document.getElementById(
                "closeModal"
            );


        if (closeButton) {

            closeButton.addEventListener(
                "click",
                function () {

                    closeModal();

                }
            );

        }


        // ==================================================
        // 팝업 바깥쪽 클릭
        // ==================================================

        const modal =
            document.getElementById(
                "modal"
            );


        if (modal) {

            modal.addEventListener(
                "click",
                function (event) {

                    if (
                        event.target === modal
                    ) {

                        closeModal();

                    }

                }
            );

        }


        // ==================================================
        // ESC
        // ==================================================

        document.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Escape"
                ) {

                    closeModal();

                }

            }
        );


        // ==================================================
        // 보유 정수 계산기
        // ==================================================

        createInventoryFinder();
        setupEssencePriceSettings();


        // ==================================================
        // 처음 레시피 출력
        // ==================================================

        renderRecipes();

    }
);
