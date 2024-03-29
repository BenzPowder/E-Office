<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model app\modules\materialsystem\models\MatsysCompany */

$this->title = 'Update Matsys Company: {nameAttribute}';
$this->params['breadcrumbs'][] = ['label' => 'Matsys Companies', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->company_id, 'url' => ['view', 'id' => $model->company_id]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="matsys-company-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
