<style lang="scss">
@import '../scss/common.scss';

.header {
    border: 8px solid orange;
    box-sizing: border-box;
    padding: 0 10px;
}
</style>

<script>
import { backgroundColor } from '~/store/header';
</script>

<div class="base-width">
    <header class="header" style="background-color: {backgroundColor};">
        <h4>D.Collection.</h4>
    </header>
</div>
