<?php

namespace app\modules\eoffice_eolmv2\controllers;

use yii\web\Controller;

/**
 * Default controller for the `eoffice_eolmv2` module
 */
class DefaultController extends Controller
{
    /**
     * Renders the index view for the module
     * @return string
     */
    public function actionIndex()
    {
        return $this->render('index');
    }
}
