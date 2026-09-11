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
        score: 9880,
        ingredients: [
            { icon: "🥔", name: "감자의 정수", amount: 6 },
            { icon: "🪵", name: "나무의 정수", amount: 1 }
        ]
    },

    {
        name: "감자 팬케이크",
        image: "images/normal_02.png",
        score: 18770,
        ingredients: [
            { icon: "🥔", name: "감자의 정수", amount: 6 },
            { icon: "🌾", name: "밀의 정수", amount: 1 },
            { icon: "🪵", name: "나무의 정수", amount: 1 }
        ]
    },

    {
        name: "달콤 당근 스튜",
        image: "images/normal_03.png",
        score: 14220,
        ingredients: [
            { icon: "🥕", name: "당근의 정수", amount: 6 },
            { icon: "🌿", name: "사탕수수의 정수", amount: 1 },
            { icon: "🪵", name: "나무의 정수", amount: 1 }
        ]
    },

    {
        name: "당근 빵",
        image: "images/normal_04.png",
        score: 19410,
        ingredients: [
            { icon: "🥕", name: "당근의 정수", amount: 6 },
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
        score: 15550,
        ingredients: [
            { icon: "🟣", name: "비트의 정수", amount: 1 },
            { icon: "🍎", name: "사과", amount: 4 }
        ]
    },

    {
        name: "매운 호박 수프",
        image: "images/normal_07.png",
        score: 24960,
        ingredients: [
            { icon: "🎃", name: "호박의 정수", amount: 1 },
            { icon: "🌿", name: "사탕수수의 정수", amount: 2 },
            { icon: "🌾", name: "밀의 정수", amount: 1 },
            { icon: "🪵", name: "나무의 정수", amount: 1 }
        ]
    },

    {
        name: "베리 파르페",
        image: "images/normal_08.png",
        score: 11160,
        ingredients: [
            { icon: "🍓", name: "달콤한 열매의 정수", amount: 6 },
            { icon: "🌿", name: "사탕수수의 정수", amount: 2 }
        ]
    },

    {
        name: "베리 파이",
        image: "images/normal_09.png",
        score: 20900,
        ingredients: [
            { icon: "🍓", name: "달콤한 열매의 정수", amount: 6 },
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
        score: 20100,
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
        score: 11300,
        ingredients: [
            { icon: "🍉", name: "수박 조각의 정수", amount: 6 },
            { icon: "🍓", name: "달콤한 열매의 정수", amount: 6 }
        ]
    },

    {
        name: "수박 샤베트",
        image: "images/normal_15.png",
        score: 7530,
        ingredients: [
            { icon: "🍉", name: "수박 조각의 정수", amount: 6 },
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
    // 재료별 총 필요 개수
    // ======================================================

    let totalIngredients =
        0;


    const ingredientHTML =
        recipe.ingredients
            .map(
                function (ingredient) {

                    const total =
                        ingredient.amount *
                        count;


                    totalIngredients +=
                        total;


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


function saveOwnedRecipesFromInputs() {

    const owned = {};

    document
        .querySelectorAll(
            "#ownedRecipeInputs input[data-recipe-name]"
        )
        .forEach(function (input) {

            let value = parseInt(input.value, 10);

            if (isNaN(value) || value < 0) {
                value = 0;
            }

            value = Math.floor(value);
            input.value = value;
            owned[input.dataset.recipeName] = value;

        });

    try {

        localStorage.setItem(
            NORI_OWNED_RECIPE_STORAGE_KEY,
            JSON.stringify(owned)
        );

    } catch (error) {

        console.warn(
            "보유 요리를 저장하지 못했습니다.",
            error
        );

    }

}


function calculateOwnedRecipeScore() {

    let totalScore = 0;
    let totalCount = 0;

    document
        .querySelectorAll(
            "#ownedRecipeInputs input[data-recipe-name]"
        )
        .forEach(function (input) {

            let count = parseInt(input.value, 10);

            if (isNaN(count) || count < 0) {
                count = 0;
            }

            count = Math.floor(count);
            input.value = count;

            const score = Number(input.dataset.recipeScore || 0);

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
    `;
    document.head.appendChild(responsiveStyle);

    const saved = loadSavedOwnedRecipes();

    getAllRecipes().forEach(function (recipe) {

        const row = document.createElement("label");

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

        const savedCount =
            Number(saved[recipe.name] || 0);

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

            <input
                type="number"
                min="0"
                step="1"
                value="${savedCount}"
                data-recipe-name="${recipe.name}"
                data-recipe-score="${recipe.score}"
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

        inputsContainer.appendChild(row);

    });

    inputsContainer
        .querySelectorAll("input[data-recipe-name]")
        .forEach(function (input) {

            input.addEventListener("input", function () {
                saveOwnedRecipesFromInputs();
                calculateOwnedRecipeScore();
            });

        });

    calculateOwnedRecipeScore();

    const openButton =
        document.getElementById("openOwnedRecipeScore");

    if (openButton) {

        openButton.addEventListener("click", function () {

            const panel =
                document.getElementById("ownedRecipeScorePanel");

            if (!panel) {
                return;
            }

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


        // ==================================================
        // 처음 레시피 출력
        // ==================================================

        renderRecipes();

    }
);
