<?php
/**
 * Created by PhpStorm.
 * User: pessm
 * Date: 11/27/2017
 * Time: 3:15 PM
 */

namespace app\modules\pfc\controllers;
use yii\web\Controller;
use app\modules\pfc\models\Process;
use app\modules\pfc\models\ProcessGrantt;

class AppointmentrController extends Controller
{
    public  function  actionAppointment_report($project_id){
        $process = Process::find()->where("project_id like :b",[":b"=>$project_id])->all();
        $process_gantt = ProcessGrantt::find()->all();
        return $this->render('appointment_report', [
            'process' => $process,
            'process_gantt' => $process_gantt,
        ]);
    }
}