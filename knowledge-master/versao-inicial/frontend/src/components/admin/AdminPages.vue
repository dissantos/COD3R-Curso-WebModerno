<template>
    <div class="admin-pages">
        <PageTitle icon="fa fa-cogs" main="Administração de Sistema" sub="Cadastro & Cia"></PageTitle>
        <div class="admin-pages-tabs">
            <b-card no-body>
                <b-tabs card>
                    <b-tab title="Artigos" active>
                        <ArticleAdmin></ArticleAdmin>
                    </b-tab>

                    <b-tab title="Categorias">
                        <CategoryAdmin></CategoryAdmin>
                    </b-tab>
                    
                    <b-tab title="Usuários">
                        <UserAdmin></UserAdmin>
                    </b-tab>

                </b-tabs>
            </b-card>
        </div>
    </div>
</template>

<script>
import PageTitle from '../template/PageTitle'
import ArticleAdmin from './ArticleAdmin'
import CategoryAdmin from './CategoryAdmin'
import UserAdmin from './UserAdmin'

export default {
    name: 'AdminPages',
    components: { PageTitle, ArticleAdmin, CategoryAdmin, UserAdmin }
}
</script>

<style>

</style>