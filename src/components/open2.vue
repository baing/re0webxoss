<template>
  <div class="battleArea">
    <div class="allyArea">
      <div class="frontArea">
        <div class="cheerZone">
          <div class="cheer"></div>
        </div>
        <div class="signiZone">
          <div class="signiZone1">
            <div class="signi1"></div>
          </div>
          <div class="signiZone2">
            <div class="signi2"></div>
          </div>
          <div class="signiZone3">
            <div class="signi3"></div>
          </div>
        </div>
        <div class="deckAndTrash">
          <div class="deckZone">
            <div class="deck"></div>
          </div>
          <div class="trashZone">
            <div class="trash"></div>
          </div>
        </div>
      </div>
      <div class="backArea">
        <div class="enerZone"></div>
        <div class="checkZone"></div>
        <div class="lrigZone"></div>
        <div class="keyZone"></div>
        <div class="deckAndTrash">
          <div class="lrigDeckZone"></div>
          <div class="lrigTrashZone"></div>
        </div>
      </div>
    </div>
    <div class="oppoArea">
      <div class="frontArea">
        <div class="cheerZone">
          <div class="cheer"></div>
        </div>
        <div class="signiZone">
          <div class="signiZone1">
            <div class="signi1"></div>
          </div>
          <div class="signiZone2">
            <div class="signi2"></div>
          </div>
          <div class="signiZone3">
            <div class="signi3"></div>
          </div>
        </div>
        <div class="deckAndTrash">
          <div class="deckZone">
            <div class="deck"></div>
          </div>
          <div class="trashZone">
            <div class="trash"></div>
          </div>
        </div>
      </div>
      <div class="backArea">
        <div class="enerZone"></div>
        <div class="checkZone"></div>
        <div class="lrigZone"></div>
        <div class="keyZone"></div>
        <div class="deckAndTrash">
          <div class="lrigDeckZone"></div>
          <div class="lrigTrashZone"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>
  .battleArea {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;

    border: 1px solid red
  }

  .allyArea,
  .oppoArea {
    width: 100%;
    height: 50%;
    border: 1px solid red;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .frontArea {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    border: 1px solid blue;
  }

  .backArea {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 50%;
    border: 1px solid blue;
  }

  .cheerZone {
    flex-grow: 7;
    border: 1px solid blue;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .signiZone {
    flex-grow: 21;
    border: 1px solid blue;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .signiZone1,
  .signiZone2,
  .signiZone3,
  .deckZone,
  .trashZone {
    flex-grow: 1;
  }

  .deckAndTrash {
    flex-grow: 10;
    border: 1px solid blue;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .cheer,
  .signi1,
  .signi2,
  .signi3 {
    width: 100%;
    padding-bottom: 100%;
    border: 1px solid red;
  }

  .deck,
  .trash {
    width: 100%;
    padding-bottom: 140%;
    border: 1px solid red;
  }
</style>