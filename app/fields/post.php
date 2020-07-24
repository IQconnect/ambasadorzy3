<?php

namespace App;

use StoutLogic\AcfBuilder\FieldsBuilder;

$post = new FieldsBuilder('post');

$post
    ->setLocation('post_type', '==', 'post');

$post
    ->addFields(get_field_partial('components.date'))
    ->addFields(get_field_partial('components.content'))
    ->addFields(get_field_partial('partials.builder'));
return $post;