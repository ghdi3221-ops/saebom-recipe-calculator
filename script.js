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
            { icon: "🌿", name: "고품질 사탕수수", amount: 2 }
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
            { icon: "🟣", name: "고품질 비트", amount: 2 },
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


        <div class="total-ingredient-count">

            총 필요한 정수

            <strong>
                ${formatNumber(totalIngredients)}개
            </strong>

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
    // 계산기 생성
    // ======================================================

    const calculator =
        createCalculator(recipe);


    const modalContent =
        modal.querySelector(
            ".modal-content"
        );


    if (modalContent) {

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
        // 처음 레시피 출력
        // ==================================================

        renderRecipes();

    }
);
